import Layout from "../components/Layout";
import { Query } from "react-apollo";
import { listStoriesQuery } from "../graphql/story/query/listStories";
import { ListStoriesQueryQuery } from "../components/apollo-components";

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Query<ListStoriesQueryQuery> query={listStoriesQuery}>
      {({ data }) => {
        return data.listStories.map(ls => <div>{ls.previewTitle}</div>);
      }}
    </Query>
  </Layout>
);
