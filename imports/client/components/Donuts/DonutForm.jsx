import React from 'react';
import PropTypes from 'prop-types';
import {
    AutoForm,
    AutoField,
    ErrorField
} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';
import { ToastContainer } from 'react-toastr';

class DonutForm extends React.Component {
    constructor() {
        super();
        this.state=  {
            image: 'image_1',
        }
        
        this.container = React.createRef();
    }

    onSubmit = (data) => {
        const { formType } = this.props;

        if (formType === 'edit') {
            Meteor.call('donut.edit', this.donutId, data, (err) => {
                if (!err) {
                    this.container.success(`Edited!`, ``, {
                        closeButton: true,
                    });
                } else {
                    this.container.error(`Edit error!`, ``, {
                        closeButton: true,
                    });
                }
            });
        } else {
            Meteor.call('donut.create', data, (err) => {
                if (!err) {
                    this.container.success(`Created!`, ``, {
                        closeButton: true,
                    });
                } else {
                    this.container.error(`Error!`, ``, {
                        closeButton: true,
                    });
                }
            });
        }

        this.props.onDonutsFormSubmit();
    };

    handleImagePickerClick = (event) => {
        const image = event.target.getAttribute('name');
        this.setState({
            image
        })
    }

    renderImagePicker() {
        return (
            <div className="cc-form__image-picker cc-image-picker">
                <span className="cc-image-picker__title">Select a donut!</span>
                <div className="cc-image-picker__controls">
                    <input type="hidden" name="image" />
                    <div
                        className="cc-image-picker__item"
                        name={'image_1'}
                        onClick={this.handleImagePickerClick}
                    />
                    <div
                        className="cc-image-picker__item"
                        name={'image_2'}
                        onClick={this.handleImagePickerClick}
                    />
                    <div
                        className="cc-image-picker__item"
                        name={'image_3'}
                        onClick={this.handleImagePickerClick}
                    />
                </div>
            </div>
        )
    }

    renderFormType() {
        const { donut, formType } = this.props;

        if (formType === 'edit') {
            return (
                <AutoForm
                    className="cc-donut-form cc-form"
                    schema={DonutsSchema}
                    onSubmit={this.onSubmit}
                    model={donut}
                >
                    <span className="cc-form__title">Add a donut</span>
                    <span className="cc-form__subtitle">don't take too long</span>

                    {this.renderImagePicker()}
                    <AutoField
                        className="cc-form__group cc-form__group--checkbox"
                        name="isComestible"
                    />
                    <ErrorField
                        name="isComestible"
                        className="cc-form__validation"
                    />
                    <AutoField
                        className="cc-form__group"
                        name="name"
                    />
                    <ErrorField
                        name="name"
                        className="cc-form__validation"
                    />
                    <AutoField
                        className="cc-form__group"
                        name="price"
                    />
                    <ErrorField
                        name="price"
                        className="cc-form__validation"
                    />
                    <button
                        className="cc-button cc-button--success"
                        type="submit"
                    >
                        Edit donut
                    </button>
                </AutoForm>
            )
        }

        return (
            <AutoForm
                className="cc-donut-form cc-form"
                schema={DonutsSchema}
                onSubmit={this.onSubmit}
            >
                <h3 className="cc-form__title">Add a donut</h3>
                <span className="cc-form__subtitle">don't take too long</span>

                {this.renderImagePicker()}
                <AutoField
                    className="cc-form__group cc-form__group--checkbox"
                    name="isComestible"
                />
                <ErrorField
                    name="isComestible"
                    className="cc-form__validation"
                />
                <AutoField
                    className="cc-form__group"
                    name="name"
                />
                <ErrorField
                    name="name"
                    className="cc-form__validation"
                />

                <AutoField
                    className="cc-form__group"
                    name="price"
                />
                <ErrorField
                    name="price"    
                    className="cc-form__validation"
                />

                <button
                    className="cc-button cc-button--success"
                    type="submit"
                >
                    Create Donut
                </button>
            </AutoForm>
        )
    }

    render() {
        return (
            <div>
                <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-top-right"
                />
                {this.renderFormType()}
            </div>
        )
    }
}

DonutForm.propTypes = {
    donut: PropTypes.shape({}),
    formType: PropTypes.string,
    
};

DonutForm.defaultProps = {
    formType: 'create',
};

export default DonutForm;
