import gql from "graphql-tag";
import { StoryInfoFragment } from "../fragments/StoryInfo";

export const createStoryMutation = gql`
  mutation CreateStoryMutation($input: CreateStoryInput!) {
    createStory(input: $input) {
      story {
        ...StoryInfo
      }
      errors {
        path
        message
      }
    }
  }
  ${StoryInfoFragment}
`;
