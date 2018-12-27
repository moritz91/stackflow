import { Request } from "express";
import { IMiddlewareTypeMap, IMiddlewareFunction } from "graphql-middleware";

export const isAuthenticated = async (req: Request) => {
  if (!req || !req.session || !req.session.userId) {
    throw new Error("not authenticated");
  }
};

const standardMiddleware: IMiddlewareFunction = async (
  resolve,
  parent,
  args,
  context,
  info
) => {
  isAuthenticated(context.req);
  return resolve(parent, args, context, info);
};

export const middleware: IMiddlewareTypeMap = {
  Mutation: {
    createStory: standardMiddleware
  }
};
