import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="cc-app-header">
                <div className="cc-app-header__container cc-container">
                    <div className="cc-app-header__brand">
                        <a className="cc-app-header__title" href="#">donut</a>
                    </div>
                    <div className="cc-app-header__object"></div>
                </div>
            </header>
        )
    }
}

export default Header;
