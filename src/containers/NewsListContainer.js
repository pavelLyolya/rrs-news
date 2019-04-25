import { connect } from 'react-redux';
import NewsList from '../components/Content/NewsList';
import { requestNews, addShownNews } from '../actions/newsActions';

const mapStateToProps = state => ({
    newsList: state.news.newsList,
    isLoading: state.news.isLoading,
    error: state.news.error,
    shownNews: state.news.shownNews,
    howMuchIsShown: state.news.howMuchIsShown,
});

const mapDispatchToProps = dispatch => ({
    requestNews: () => dispatch(requestNews()),
    addShownNews: (news, quantity) => dispatch(addShownNews(news, quantity + 5)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
