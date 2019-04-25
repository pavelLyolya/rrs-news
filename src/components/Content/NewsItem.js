import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Content/NewsItem.scss';

const NewsItem = ({ news }) => (
    <a href={news.url} className='news-item' target='blank'>
        <div
            className='news-item_image-wrap'
            style={{
                backgroundImage: `url(${news.urlToImage})`,
            }}
        >
            <div className='post-info'>
                <span className='post-info_row'>
                    <span className='post-info_row__thin'>Author:</span>
                    {news.author}
                </span>
                <span className='post-info_row'>
                    <span className='post-info_row__thin'>Published at:</span>
                    {new Date(news.publishedAt).toDateString()}
                </span>
            </div>
        </div>
        <article className='news-item_text'>
            <h3 className='news-item_title'>
                {news.title}
            </h3>
            <h4 className='news-item_source-name'>
                {news.source.name}
            </h4>
            <p className='news-item_description'>
                {news.description}
            </p>
        </article>
    </a>
);

NewsItem.propTypes = {
    news: PropTypes.object.isRequired,
};

export default NewsItem;
