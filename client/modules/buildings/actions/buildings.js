export default {
  create({Meteor, LocalState}, postId, text) {
    if (!text) {
      return LocalState.set('CREATE_BUILDING_ERROR', 'Comment text is required.');
    }

    if (!postId) {
      return LocalState.set('CREATE_BUILDING_ERROR', 'postId is required.');
    }

    LocalState.set('CREATE_BUILDING_ERROR', null);

    const id = Meteor.uuid();
    Meteor.call('buildings.create', id, postId, text, (err) => {
      if (err) {
        return LocalState.set('CREATE_BUILDING_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_BUILDING_ERROR', null);
  }
};
