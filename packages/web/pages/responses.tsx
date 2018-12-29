import Layout from "../components/Layout";
import { Query } from "react-apollo";
import { listStoriesQuery } from "../graphql/story/query/listStories";
import { ListStoriesQueryQuery } from "../components/apollo-components";
import { StoryCard } from "../components/StoryCard";

export default () => (
  <Layout title="List of Stories">
    <Query<ListStoriesQueryQuery> query={listStoriesQuery}>
      {({ data, loading }) => {
        return loading ? null : (
          <div>
            {data.listStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        );
      }}
    </Query>
  </Layout>
);
