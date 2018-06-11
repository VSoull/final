import React from 'react';
import {
    AutoForm,
    AutoField,
    ErrorField
} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <AutoForm
                className="cc-form"
                schema={RegisterSchema}
                onSubmit={this.onSubmit}
            >
                <AutoField
                    className="cc-form__group"
                    name="email"
                    placeholder="Email"
                />
                <ErrorField
                    name="email"
                    className="cc-form__validation"
                />

                <AutoField
                    className="cc-form__group"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <ErrorField
                    name="password"
                    className="cc-form__validation"
                />

                <AutoField
                    className="cc-form__group"
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                />
                <ErrorField
                    name="confirm_password"
                    className="cc-form__validation"
                />

                <button
                    className="cc-button cc-button--primary"
                    type="submit"
                >
                    Register
                </button>
            </AutoForm>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;
