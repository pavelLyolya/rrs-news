import React from 'react';
import SearchRow from '../../containers/SearchRowContainer';
import '../../styles/Header/Header.scss';

const Header = () => (
    <header className='app-header'>
        <div className='app-header-wrap wrapper'>
            <h1 className='site-name'>RRSNews</h1>
            <SearchRow />
        </div>
    </header>
);

export default Header;
