import gql from "graphql-tag";
import { ResponseInfoFragment } from "../fragments/ResponseInfo";

export const listResponsesQuery = gql`
  query ListResponsesQuery {
    listResponses {
      ...ResponseInfo
      author {
        username
      }
    }
  }
  ${ResponseInfoFragment}
`;
