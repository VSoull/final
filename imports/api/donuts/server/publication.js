import {Meteor} from 'meteor/meteor';
import {Donuts} from '/imports/db';

Meteor.publish('donuts', function() {
    if (this.userId) {
        return Donuts.find();
    }
    return null;
});