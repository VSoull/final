import React, { Component } from 'react';
import Login from '../../components/Login.jsx';
import Register from '../../components/Register.jsx';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="cc-container">
                    <div className="cc-auth">
                        <div className="cc-auth__col">
                            <Login />
                        </div>
                        <div className="cc-auth__col">
                            <Register />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
