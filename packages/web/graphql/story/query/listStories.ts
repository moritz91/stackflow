import gql from "graphql-tag";
import { StoryInfoFragment } from "../fragments";

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
