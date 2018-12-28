import gql from "graphql-tag";

export const meQuery = gql`
  query meQuery {
    me {
      email
      username
    }
  }
`;
