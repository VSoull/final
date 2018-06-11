import React, { Component } from 'react';
import Scroll from 'react-scroll';
import FA from 'react-fontawesome';

import DonutForm from '../../components/Donuts/DonutForm';
import DonutsList from '../../components/Donuts/DonutsList';

class Donuts extends Component {
    constructor() {
        super();
        this.state = {
            donut: null,
            formType: 'create',
            // loading: true,
        }
    }

    handleDonutEditClick = (_id) => {
        const formType = 'edit';
        Meteor.call('donut.find', _id, (err, donut) => {
            this.setState({
                donut,
                formType,
                // loading: false
            })
            Scroll.scroller.scrollTo(
                'scrollToForm',
                {
                    smooth: true,
                    offset: 150
                }
            )
        })
    }

    handleHeroCtaClick = (event) => {
        Scroll.scroller.scrollTo(
            'scrollToContent',
            {
                smooth: true,
                offset: 0
            }
        )
        event.preventDefault();
    }

    handleDonutsFormSubmit = () => {
        Scroll.scroller.scrollTo(
            'scrollToDonuts',
            {
                smooth: true,
                offset: 0
            }
        )
    }

    renderDonutFormSection() {
        return (
            <section className="cc-donut-form-section cc-section">
                <div className="cc-container">
                    <article className="cc-section__content">
                        <DonutForm
                            donut={this.state.donut}
                            formType={this.state.formType}
                            onDonutsFormSubmit={this.handleDonutsFormSubmit}
                        />
                    </article>
                </div>
            </section>
        )
    }

    renderDonutsListSection() {
        return (
            <section className="cc-donuts-list-section cc-section">
                <div className="cc-container">
                    <DonutsList
                        className={'cc-donuts-list'}
                        listType='stack'
                        onDonutEditClick={this.handleDonutEditClick}
                    />

                    <DonutsList
                        className={'cc-related-donuts-list'}
                        listType='queue'
                        onDonutEditClick={this.handleDonutEditClick}
                    />
                </div>
            </section>
        )
    }

    renderRelatedDonutsSection() {
        return (
            <section className="cc-related-donuts-section cc-section">
                <div className="cc-container"></div>
            </section>
        )
    }

    render() {
        const Element = Scroll.Element;

        return (
            <main>
                <section className="cc-hero">
                    <div className="cc-container">
                        <article className="cc-hero__content">
                            <div className="cc-hero__caption">
                                <h1 className="cc-hero__title">Best donut in the city!</h1>
                                <div className="cc-hero__description">
                                    Dispatched entreaties boisterous say why stimulated.
                                    Certain forbade picture now prevent carried she get see sitting.
                                    Up twenty limits as months. Inhabit so perhaps of in to certain.
                                </div>
                                <span
                                    className="cc-hero__cta"
                                    onClick={this.handleHeroCtaClick}
                                >
                                    <FA name="angle-down" />
                                </span>
                            </div>
                        </article>
                    </div>
                </section>
                <Element name="scrollToContent" />
                <section className="cc-about-us-section cc-section">
                    <div className="cc-container">
                        <div className="cc-row">
                            <div className="col is-3-of-3--bellow-tablet is-1-of-3">
                                <article className="cc-text-block">
                                    <h3 className="cc-text-block__title">
                                        Dispatched entreaties boisterous say why stimulated.
                                    </h3>
                                    <p className="cc-text-block__description">
                                        Old unsatiable our now but considered travelling impression.
                                        In excuse hardly summer in basket misery. By rent an part need.
                                    </p>
                                </article>
                            </div>
                            <div className="col is-3-of-3--bellow-tablet is-1-of-3">
                                <article className="cc-text-block">
                                    <h3 className="cc-text-block__title">
                                        Certain forbade picture now prevent carried she get see sitting.
                                    </h3>
                                    <p className="cc-text-block__description">
                                        She travelling acceptance men unpleasant her especially entreaties law.
                                        Law forth but end any arise chief arose. Old her say learn these large.
                                    </p>
                                </article>
                            </div>
                            <div className="col is-3-of-3--bellow-tablet is-1-of-3">
                                <article className="cc-text-block">
                                    <h3 className="cc-text-block__title">
                                        Certain forbade picture now prevent carried she get see sitting.
                                    </h3>
                                    <p className="cc-text-block__description">
                                        Up twenty limits as months.
                                        Inhabit so perhaps of in to certain.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <Element name="scrollToForm" />
                {this.renderDonutFormSection()}
                <Element name="scrollToDonuts" />
                {this.renderDonutsListSection()}
                {this.renderRelatedDonutsSection()}
            </main>
        )
    }
}

Donuts.propTypes = {};
Donuts.defaultProps = {};

export default Donuts;
