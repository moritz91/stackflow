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

    try {
      const story = await Story.create({
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
        story,
        errors: []
      };
    } catch (err) {
      const { detail } = err;
      if (detail.includes("already exists.")) {
        if (detail.includes("previewTitle")) {
          return {
            errors: [
              {
                path: "previewTitle",
                message: "Preview title already exists"
              }
            ]
          };
        } else if (detail.includes("title")) {
          return {
            errors: [
              {
                path: "title",
                message: "title already exists"
              }
            ]
          };
        } else if (detail.includes("previewDescription")) {
          return {
            errors: [
              {
                path: "previewDescription",
                message: "Preview description already exists"
              }
            ]
          };
        }
      }
    }

    return {
      errors: []
    };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
