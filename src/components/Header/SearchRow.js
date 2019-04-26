import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Header/SearchRow.scss';

class SearchRow extends Component {
    currentInputValue = '';

    changeInput = (e) => {
        this.currentInputValue = e.target.value;
    }

    requestNewsByQuery = (e) => {
        e.preventDefault();
        if (this.currentInputValue === '') {
            this.props.requestNewsByQuery(null);
        } else {
            this.props.requestNewsByQuery(this.currentInputValue);
        }
    }

    render() {
        return (
            <form
                className='search-form'
                onSubmit={this.requestNewsByQuery}
            >
                <input
                    type='text'
                    className='search-form_input'
                    placeholder='Search news by keyword...'
                    onChange={this.changeInput}
                />
            </form>
        );
    }
}

SearchRow.propTypes = {
    requestNewsByQuery: PropTypes.func.isRequired,
};

export default SearchRow;
