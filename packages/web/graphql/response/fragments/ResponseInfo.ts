import gql from "graphql-tag";

export const ResponseInfoFragment = gql`
  fragment ResponseInfo on Story {
    id
    authorId
    body
    claps
  }
`;
