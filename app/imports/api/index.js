import {makeExecutableSchema} from 'graphql-tools';
import typeDefs from './typeDefs';
import seeds from './seeds';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export {schema}
