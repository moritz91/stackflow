import { QueryResolvers } from "../../../types";
import { Response } from "../../../entity/Response";

const resolvers: QueryResolvers.Resolvers = {
  listResponses: (_, { input: { storyId } }) => {
    return Response.find({ where: { storyId } }) as any;
  }
};

export default {
  Query: {
    ...resolvers
  }
};
