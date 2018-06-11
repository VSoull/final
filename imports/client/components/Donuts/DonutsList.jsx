import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Donuts } from '/imports/db';
import { ToastContainer } from 'react-toastr';

import Donut from '../../components/Donuts/Donut.jsx';

class DonutsList extends React.Component {
    constructor() {
        super();
        this.container = React.createRef();
    }

    handleDonutEditClick = (_id) => {
        this.props.onDonutEditClick(_id);
    };

    handleDonutRemoveClick = (_id) => {
        Meteor.call('donut.remove', _id);
        this.container.success(`Removed!`, ``, {
            closeButton: true,
        });
    };

    render() {
        const {
            className,
            isLoading,
            donuts,
            listType,
        } = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-top-right"
                />
                <div className={`cc-donuts-list ${className}`}>
                    {
                        donuts.map(donut => {
                            const {
                                _id,
                                createdAt,
                                image,
                                isComestible,
                                name,
                                price,
                                userId,
                            } = donut;
                            const isDonutOwner = userId === Meteor.userId();
                            const isTile = listType !== 'stack';

                            return (
                                <Donut
                                    key={_id}
                                    _id={_id}
                                    createdAt={createdAt}
                                    image={image}
                                    isComestible={isComestible}
                                    isDonutOwner={isDonutOwner}
                                    isTile={isTile}
                                    name={name}
                                    price={price}
                                    onDonutEditClick={this.handleDonutEditClick}
                                    onDonutRemoveClick={this.handleDonutRemoveClick}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);
