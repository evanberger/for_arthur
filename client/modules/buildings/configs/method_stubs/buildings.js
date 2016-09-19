export default function ({Collections, Meteor}) {
  Meteor.methods({
    'buildings.create'(_id, postId, text) {
      const saving = true;
      const createdAt = new Date();
      const author = 'Me';
      Collections.Buildings.insert({
        _id, postId, text, saving, createdAt, author
      });
    }
  });
}
