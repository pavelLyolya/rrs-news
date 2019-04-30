import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
