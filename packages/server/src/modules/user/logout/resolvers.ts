import { MutationResolvers } from "../../../types";

export const resolvers: MutationResolvers.Resolvers = {
  logout: async (_, __, { req, res }) => {
    await new Promise((res, rej) =>
      req.session!.destroy(err => {
        if (!err) {
          res;
        } else {
          rej(err);
        }
      })
    );
    res.clearCookie("qid");
    return true;
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
