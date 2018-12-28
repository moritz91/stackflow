import gql from "graphql-tag";
import { StoryInfoFragment } from "../fragments/StoryInfo";

export const listStoriesQuery = gql`
  query ListStoriesQuery {
    listStories {
      ...StoryInfo
      author {
        username
      }
    }
  }
  ${StoryInfoFragment}
`;
