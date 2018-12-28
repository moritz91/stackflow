import * as React from "react";
import Head from "next/head";
import { Query } from "react-apollo";
import { meQuery } from "../graphql/user/query/me";
import { MeQueryQuery } from "./apollo-components";
import Link from "next/link";

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
    <Query<MeQueryQuery> ssr={false} query={meQuery}>
      {({ data, loading }) => {
        console.log(data.me);
        const isLoggedIn = !!data.me;

        if (loading) {
          return <p>loading...'</p>;
        }

        return isLoggedIn ? (
          <p>{data.me.username}</p>
        ) : (
          <Link href="/register">
            <a>Register</a>
          </Link>
        );
      }}
    </Query>

    {children}
  </div>
);

export default Layout;
