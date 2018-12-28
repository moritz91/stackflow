import { ListStoriesQueryListStories, MeQueryMe } from "./apollo-components";

const CHAR_COUNT = 90;

export const StoryCard = ({
  story
}: {
  story: ListStoriesQueryListStories;
  currUser: MeQueryMe | null;
}) => (
  <div key={story.id}>
    <div>{story.previewTitle}</div>
    <div>{`${story.previewDescription.slice(0, CHAR_COUNT)}${
      story.previewDescription.length > CHAR_COUNT ? "..." : ""
    }`}</div>
    <div>posted by {story.author.username}</div>
  </div>
);
