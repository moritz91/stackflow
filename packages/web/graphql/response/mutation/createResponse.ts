import gql from "graphql-tag";
import { ResponseInfoFragment } from "../fragments/ResponseInfo";

export const createResponseMutation = gql`
  mutation CreateResponseMutation($input: CreateResponseInput!) {
    createResponse(input: $input) {
      ok
    }
  }
  ${ResponseInfoFragment}
`;
