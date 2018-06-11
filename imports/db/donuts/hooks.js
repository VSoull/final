import {Donuts} from '/imports/db';

Donuts.before.insert(function (userId, doc) {
    doc.userId = userId
    doc.createdAt = new Date();
});
