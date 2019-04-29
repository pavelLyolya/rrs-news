import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import uniqid from 'uniqid';
import SectionHeader from './SectionHeader';
import NewsItem from './NewsItem';
import Button from './Button';

class NewsList extends Component {
    componentDidMount() {
        this.props.requestNews();
    }

    addShownNews = () => this.props.addShownNews(
        this.props.newsList,
        this.props.howMuchIsShown,
    )

    render() {
        return (
            <section className='news-list list'>
                <SectionHeader headerName='News' />
                {
                    !this.props.isLoading && this.props.newsList.length === 0
                        && <p className='message'>There are no articles matching your request...</p>
                }
                {this.props.shownNews && this.props.shownNews.map(news => (<NewsItem
                    key={uniqid()}
                    news={news}
                />))}
                <PropagateLoader color={'#d8d8d8'} loading={this.props.isLoading} />
                {
                    this.props.newsList.length !== this.props.shownNews.length
                    && <Button name='More' onClick={this.addShownNews} />
                }
            </section>
        );
    }
}

NewsList.propTypes = {
    newsList: PropTypes.array,
    shownNews: PropTypes.array,
    howMuchIsShown: PropTypes.number,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    requestNews: PropTypes.func,
    addShownNews: PropTypes.func,
};

export default NewsList;
