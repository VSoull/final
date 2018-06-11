import React from 'react';
import {
    AutoForm,
    AutoField,
    ErrorField
} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <AutoForm
                className="cc-form"
                schema={LoginSchema}
                onSubmit={this.onSubmit}
            >
                <AutoField
                    className="cc-form__group"
                    name="email"
                    placeholder="Email"
                />
                <ErrorField
                    className="cc-form__validation"
                    name="email"
                />
                <AutoField
                    className="cc-form__group"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <ErrorField
                    className="cc-form__validation"
                    name="password"
                />
                
                <button
                    className="cc-button cc-button--primary"
                    type="submit"
                >
                    Login
                </button>
            </AutoForm>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: { type: String }
});

export default Login;
