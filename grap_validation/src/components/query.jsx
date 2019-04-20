import gql from "graphql-tag";

export const query = gql`
  {
    organization(login: "apollographql") {
      repositories(first: 7) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`