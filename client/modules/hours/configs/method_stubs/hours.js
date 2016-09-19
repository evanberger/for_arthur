export default function ({Collections, Meteor}) {
  Meteor.methods({
    'hours.create'(_id, postId, text) {
      const saving = true;
      const createdAt = new Date();
      const author = 'Me';
      Collections.Hours.insert({
        _id, postId, text, saving, createdAt, author
      });
    }
  });
}
