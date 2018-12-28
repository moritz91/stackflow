import Layout from "../components/Layout";
import { Query, Mutation } from "react-apollo";
import { listStoriesQuery } from "../graphql/story/query/listStories";
import {
  ListStoriesQueryQuery,
  CreateResponseMutationComponent
} from "../components/apollo-components";
import { createResponseMutation } from "../graphql/response/mutation/createResponse";

const CHAR_COUNT = 90;

export default () => (
  <Layout title="List of Stories">
    <Mutation<CreateResponseMutationComponent>
      mutation={createResponseMutation}
      refetchQueries={[{ query: listStoriesQuery }]}
    >
      {() => (
        <Query<ListStoriesQueryQuery> query={listStoriesQuery}>
          {({ data }) => {
            return data.listStories.map(ls => (
              <div key={ls.id}>
                <div>{ls.previewTitle}</div>
                <div>{`${ls.previewDescription.slice(0, CHAR_COUNT)}${
                  ls.previewDescription.length > CHAR_COUNT ? "..." : ""
                }`}</div>
                <div>posted by {ls.author.username}</div>
              </div>
            ));
          }}
        </Query>
      )}
    </Mutation>
  </Layout>
);
