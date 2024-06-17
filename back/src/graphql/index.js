import { createSchema } from "graphql-yoga";
import { TypeDefs as User, resolvers as userResolvers } from "./modals/user.js";
import { TypeDefs as Comment, resolvers as commentResolvers } from "./modals/comments.js";
import _ from "lodash";

const queries = /*Graphql*/ `
type Query{
    hello: String
}
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const schema = createSchema({
  typeDefs: [queries, User, Comment],
  resolvers: _.merge(resolvers, userResolvers, commentResolvers),

});

export default schema;
