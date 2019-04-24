import React from 'react';
import '../../styles/Header/SearchRow.scss';

const SearchRow = () => (
    <form className='search-form'>
        <input
            type='text'
            className='search-form_input'
            placeholder='Search news by keyword...'
        />
    </form>
);

export default SearchRow;
