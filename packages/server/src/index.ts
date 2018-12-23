import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as express from "express";
import { createTypeormConn } from "./createTypeormConn";
import { createSchema } from "./createSchema";
import { redis } from "./redis";
import * as cors from "cors";

// @todo: move to .env
const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session);

const startServer = async () => {
  await createTypeormConn();

  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 365 * 7 // 7 yrs
      }
    })
  );

  const server = new ApolloServer({
    schema: createSchema(),
    context: ({ req }: any) => ({
      req
    })
  });

  server.applyMiddleware({
    app,
    cors: false
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
