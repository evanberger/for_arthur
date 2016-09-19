import {Buildings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'buildings.create'(_id, postId, text) {
      check(_id, String);
      check(postId, String);
      check(text, String);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const author = 'The User';
      const comment = {_id, postId, author, text, createdAt};
      Buildings.insert(comment);
    }
  });
}
