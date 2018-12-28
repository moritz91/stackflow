import Layout from "../components/Layout";
import { Query, Mutation } from "react-apollo";
import { listStoriesQuery } from "../graphql/story/query/listStories";
import {
  ListStoriesQueryQuery,
  CreateResponseMutationComponent,
  MeQueryQuery
} from "../components/apollo-components";
import { createResponseMutation } from "../graphql/response/mutation/createResponse";
import { StoryCard } from "../components/StoryCard";
import { meQuery } from "../graphql/user/query/me";

export default () => (
  <Layout title="List of Stories">
    <Query<MeQueryQuery> query={meQuery}>
      {({ data: meData, loading }) =>
        loading ? null : (
          <Mutation<CreateResponseMutationComponent>
            mutation={createResponseMutation}
            refetchQueries={[{ query: listStoriesQuery }]}
          >
            {() => (
              <Query<ListStoriesQueryQuery> query={listStoriesQuery}>
                {({ data, loading }) => {
                  console.log(meData);
                  return loading ? null : (
                    <div>
                      {data.listStories.map(story => (
                        <StoryCard
                          key={story.id}
                          currUser={meData.me}
                          story={story}
                        />
                      ))}
                    </div>
                  );
                }}
              </Query>
            )}
          </Mutation>
        )
      }
    </Query>
  </Layout>
);
