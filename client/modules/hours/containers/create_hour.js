import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Component from '../components/create_hour';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_HOUR_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
