import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/building_list';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('buildings.list').ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const buildings = Collections.Buildings.find({}, options).fetch();
    onData(null, {buildings});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
