import { connect } from 'react-redux';
import NewsList from '../components/Content/NewsList';
import { requestNews } from '../actions/newsActions';

const mapStateToProps = state => ({
    newsList: state.news.newsList,
    isLoading: state.news.isLoading,
    error: state.news.error,
});

const mapDispatchToProps = dispatch => ({
    requestNews: () => dispatch(requestNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
