import gql from "graphql-tag";

export const meQuery = gql`
  query meQuery {
    me {
      id
      email
      username
    }
  }
`;
