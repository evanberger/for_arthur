import {Buildings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('buildings.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Buildings.find(selector, options);
  });

  Meteor.publish('buildings.single', function (postId) {
    check(postId, String);
    const selector = {_id: postId};
    return Buildings.find(selector);
  });
}
