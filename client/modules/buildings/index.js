import methodStubs from './configs/method_stubs';
import routes from './routes';
import actions from './actions';

export default {
  actions,
  routes,
  load(context) {
    methodStubs(context);
  }
};
