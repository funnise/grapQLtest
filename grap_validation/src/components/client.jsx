import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${
            'd59ded50aa7391762bd4c2cad85cc35b478c0a44'
          }`
        }
      });
    }
  });