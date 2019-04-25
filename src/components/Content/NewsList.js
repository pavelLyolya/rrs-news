import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import uniqid from 'uniqid';
import '../../styles/Content/NewsList.scss';
import SectionHeader from './SectionHeader';
import NewsItem from './NewsItem';
import Button from './Button';

class NewsList extends Component {
    componentDidMount() {
        this.props.requestNews();
    }

    render() {
        return (
            <section className='news-list list'>
                <SectionHeader headerName='News' />
                {this.props.newsList && this.props.newsList.map(news => (<NewsItem
                    key={uniqid()}
                    news={news}
                />))}
                <PropagateLoader color={'#d8d8d8'} loading={this.props.isLoading} />
                <Button name='More' />
            </section>
        );
    }
}

NewsList.propTypes = {
    newsList: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    requestNews: PropTypes.func,
};

export default NewsList;
