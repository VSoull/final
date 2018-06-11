import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './stylesheets/scss/app.scss';

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        const { main, routeProps } = this.props;
        return [
            <div key={'cc-app'}>
                <Header />
                  { React.createElement(main, { routeProps: routeProps, key: 'main' }) }
                <Footer />
            </div>
        ]
    }
}