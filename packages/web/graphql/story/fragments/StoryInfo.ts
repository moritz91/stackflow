import gql from "graphql-tag";

export const StoryInfoFragment = gql`
  fragment StoryInfo on Story {
    id
    authorId
    title
    summary
    body
    previewTitle
    previewDescription
    previewImageUrl
    tags
  }
`;
