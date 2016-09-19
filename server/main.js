import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initial_adds.js';
import {createApolloServer} from 'meteor/apollo';
import {schema} from '/lib/api';

publications();
methods();
addInitialData();

createApolloServer({
  graphiql: true,
  pretty: true,
  logger: true,
  schema
});
