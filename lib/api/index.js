import {makeExecutableSchema} from 'graphql-tools';
import Building from './schema/building';
import Hour from './schema/hour';
import resolvers from './resolvers';

const Query = `
  type Query {
    buildings: [Building]
    building(id: String): Building
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Building, Hour],
  resolvers,
});

export {schema}
