import gql from "graphql-tag";
import { ResponseInfoFragment } from "../fragments";

export const createResponseMutation = gql`
  mutation CreateResponseMutation($input: CreateResponseInput!) {
    createResponse(input: $input) {
      ok
    }
  }
  ${ResponseInfoFragment}
`;
