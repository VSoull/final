import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import FA from 'react-fontawesome';

class Donut extends React.Component {
    constructor() {
        super();
    }

    handleDonutEditClick = () => {
        const { _id } = this.props;
        this.props.onDonutEditClick(_id);
    }

    handleDonutRemoveClick = () => {
        const { _id } = this.props;
        this.props.onDonutRemoveClick(_id);
    }

    render() {
        const {
            createdAt,
            name,
            price,
            isDonutOwner,
            isTile
        } = this.props;
        const cssClass = isTile ? 'tile' : 'list';
        const dateToFormat = createdAt;

        return (
            <article
                className={`cc-donut cc-donut--${cssClass}`}
            >
                <div className="cc-donut__object"></div>
                <div className="cc-donut__content">
                    <div>
                        <h3 className="cc-donut__name">{name}</h3>
                        <div className="cc-donut__create-date">
                            <Moment format="DD/MM/YYYY">{dateToFormat}</Moment>
                        </div>
                    </div>
                    <span className="cc-donut__price">
                        {price}
                        <FA name="usd" />
                    </span>
                    {
                        isDonutOwner &&
                        <div className="cc-donut__controls">
                            <span
                                className="cc-donut__cta is-edit"
                                onClick={this.handleDonutEditClick}
                            >
                                <FA name="pencil" />
                            </span>
                            <span
                                className="cc-donut__cta is-remove"
                                onClick={this.handleDonutRemoveClick}
                            >
                                <FA name="trash" />
                            </span>
                        </div>
                    }
                </div>
                {/* <p>Is Comestible? : {donut.isComestible ? 'Yes' : 'No'}</p> */}
            </article>
        )
    }
}

Donut.propTypes = {
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    image: PropTypes.string.isRequired,
    isComestible: PropTypes.bool.isRequired,
    isDonutOwner: PropTypes.bool.isRequired,
    isTile: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onDonutEditClick: PropTypes.func.isRequired,
    onDonutRemoveClick: PropTypes.func.isRequired,
};

export default Donut;
