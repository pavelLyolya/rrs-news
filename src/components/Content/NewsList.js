import React from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import uniqid from 'uniqid';
import '../../styles/Content/NewsList.scss';
import SectionHeader from './SectionHeader';
import NewsItem from './NewsItem';

const NewsList = ({ newsList }) => (
    <section className='news-list list'>
        <SectionHeader headerName='News' />
        <PropagateLoader color={'#d8d8d8'} loading={false} />
        {newsList && newsList.map(news => (<NewsItem
            key={uniqid()}
            news={news}
        />))}
    </section>
);

NewsList.propTypes = {
    newsList: PropTypes.array,
};

export default NewsList;
