import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
