import { MutationResolvers } from "../../../types";
import { Response } from "../../../entity/Response";
import { isAuthenticated } from "../../../../middleware";

const resolvers: MutationResolvers.Resolvers = {
  createResponse: async (_, { input: { storyId, body } }, { req }) => {
    isAuthenticated(req);

    await Response.create({
      storyId,
      authorId: req.session!.userId,
      body,
      claps: 0
    }).save();

    return {
      ok: true
    };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
