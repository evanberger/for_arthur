import {Mongo} from 'meteor/mongo'

const Buildings = new Mongo.Collection('buildings');
const Hours = new Mongo.Collection('hours');

export {Buildings, Hours};
