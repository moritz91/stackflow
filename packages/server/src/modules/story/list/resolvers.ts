import { QueryResolvers } from "../../../types";
import { Story } from "../../../entity/Story";

const resolvers: QueryResolvers.Resolvers = {
  listStories: () => {
    return Story.find();
  }
};

export default {
  Query: {
    ...resolvers
  }
};
