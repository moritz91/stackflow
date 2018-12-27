import { MutationResolvers } from "../../../types";
import { Story } from "../../../entity/Story";
import { isAuthenticated } from "../../../../middleware";

export const resolvers: MutationResolvers.Resolvers = {
  createStory: async (
    _,
    {
      input: {
        title,
        summary,
        body,
        previewTitle,
        previewDescription,
        previewImageUrl,
        tags
      }
    },
    { req }
  ) => {
    isAuthenticated(req);

    const createStory = await Story.create({
      title,
      summary,
      body,
      previewTitle,
      previewDescription,
      previewImageUrl: previewImageUrl || undefined,
      tags,
      author: req.session!.userId,
      claps: 0
    }).save();

    return {
      errors: [],
      createStory
    };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
