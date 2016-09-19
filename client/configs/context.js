import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Apollo: new ApolloClient(meteorClientConfig()),
    LocalState: new ReactiveDict(),
    Tracker
  };
}
