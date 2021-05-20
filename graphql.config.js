module.exports = {
  projects: {
    app: {
      schema: [".tina/__generated__/schema.gql"],
      documents: [
        "pages/**/*.{graphql,js,ts,jsx,tsx}",
        "pages/*.{graphql,js,ts,jsx,tsx}",
      ],
    },
  },
};
