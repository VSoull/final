import {Meteor} from 'meteor/meteor';
import {Donuts} from '/imports/db';
import Security from '/imports/api/security';

Meteor.methods({
    'donut.create'(data) {
        return Donuts.insert(data)
    },

    'donut.find'(_id) {
        // throw exception if not logged it:
        Security.checkLoggedIn(this.userId);

        return Donuts.findOne({_id: _id, userId: this.userId});
    },

    'donut.edit'(_id, data) {
        Donuts.update({_id: _id, userId: this.userId}, {$set: data});
    },

    'donut.remove'(_id) {
        Donuts.remove({_id: _id, userId: this.userId});
    }
});