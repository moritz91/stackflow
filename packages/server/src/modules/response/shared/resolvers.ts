import { ResponseResolvers } from "../../../types";
import { User } from "../../../entity/User";

export const resolvers: ResponseResolvers.Resolvers = {
  author: async ({ authorId }) => {
    const user = await User.findOne(authorId);
    if (user) {
      return user;
    }

    return { id: "deleted", email: "deleted", username: "deleted" };
  }
};

export default {
  Response: {
    ...resolvers
  }
};
