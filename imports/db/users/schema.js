import SimpleSchema from 'simpl-schema';

const UserSchema = new SimpleSchema({
    emails: {
        type: Array,
        optional: true
    },

    'emails.$': {
        type: Object
    },

    'emails.$.address': {
        type: String
    },

    'emails.$.verified': {
        type: Boolean,
        optional: true
    },

    services: {
        type: Object,
        optional: true,
        blackbox: true
    },

    createdAt: {
        type: Date,
        optional: true
    },
});

export default UserSchema;