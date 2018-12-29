import * as React from "react";
import Head from "next/head";
import { Query, Mutation } from "react-apollo";
import { meQuery } from "../graphql/user/query/me";
import { MeQueryQuery, LogoutMutationComponent } from "./apollo-components";
import Link from "next/link";
import Router from "next/router";
import { logoutMutation } from "../graphql/user/mutation/logout";

type Props = {
  title?: string;
};

const Layout: React.SFC<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Mutation<LogoutMutationComponent> mutation={logoutMutation}>
      {mutate => (
        <Query<MeQueryQuery> ssr={false} query={meQuery}>
          {({ data, loading, client }) => {
            const isLoggedIn = !!data.me;

            if (loading) {
              return <p>loading...</p>;
            }

            return isLoggedIn ? (
              <div>
                <p>{data.me.username}</p>
                <Link href="/logout">
                  <a
                    onClick={async () => {
                      await mutate({
                        update: store => {
                          store.writeQuery({
                            query: meQuery,
                            data: {
                              me: null
                            }
                          });
                        }
                      });
                      Router.push("/home");
                      await client.resetStore();
                    }}
                  >
                    Logout
                  </a>
                </Link>
              </div>
            ) : (
              <Link href="/register">
                <a>Register</a>
              </Link>
            );
          }}
        </Query>
      )}
    </Mutation>

    {children}
  </div>
);

export default Layout;
