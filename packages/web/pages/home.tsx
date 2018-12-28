import Layout from "../components/Layout";
import { Query } from "react-apollo";
import { listStoriesQuery } from "../graphql/story/query/listStories";
import { ListStoriesQueryQuery } from "../components/apollo-components";

export default () => (
  <Layout title="List of Stories">
    <Query<ListStoriesQueryQuery> query={listStoriesQuery}>
      {({ data }) => {
        return data.listStories.map(ls => (
          <div key={ls.id}>
            <div>{ls.previewTitle}</div>
            <div>posted by {ls.author.username}</div>
          </div>
        ));
      }}
    </Query>
  </Layout>
);
