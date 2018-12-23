import * as argon from "argon2";

import { User } from "../../../entity/User";
import { MutationResolvers } from "../../../types";

export const resolvers: MutationResolvers.Resolvers = {
  register: async (_, { input: { username, email, password } }) => {
    const hashedPassword = await argon.hash(password);

    try {
      await User.create({
        email,
        username,
        password: hashedPassword
      }).save();

      return {
        errors: []
      };
    } catch (err) {
      const { detail } = err;
      if (detail.includes("already exists.")) {
        if (detail.includes("email")) {
          return {
            errors: [
              {
                path: "email",
                message: "email already in use"
              }
            ]
          };
        } else if (detail.includes("username")) {
          return {
            errors: [
              {
                path: "username",
                message: "already taken"
              }
            ]
          };
        }
      }
    }
    return { errors: [] };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
