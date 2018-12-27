import gql from "graphql-tag";

export const createStoryMutation = gql`
  mutation CreateStoryMutation($input: CreateStoryInput!) {
    createStory(input: $input) {
      story {
        id
        author
        title
        summary
        body
        previewTitle
        previewDescription
        previewImageUrl
        tags
      }
      errors {
        path
        message
      }
    }
  }
`;
