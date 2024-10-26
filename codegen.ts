import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/generated/anilist.tsx': {
      schema: `https://graphql.anilist.co`,
      documents: 'src/app/graphql/anilist/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};
export default config;
