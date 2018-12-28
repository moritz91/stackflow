import { StoryResolvers } from "../../../types";
import { User } from "../../../entity/User";

export const resolvers: StoryResolvers.Resolvers = {
  author: async ({ authorId }) => {
    const user = await User.findOne(authorId);
    if (user) {
      return user;
    }

    return { id: "deleted", email: "deleted", username: "deleted" };
  }
};

export default {
  Story: {
    ...resolvers
  }
};
