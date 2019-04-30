import { connect } from 'react-redux';
import SearchRow from '../components/Header/SearchRow';
import { requestNewsByQuery, requestNewsFromTheSource } from '../actions/newsActions';

const mapStateToProps = state => ({
    searchBy: state.searchBy,
});

const mapDispatchToProps = dispatch => ({
    requestNewsByQuery: (query) => {
        dispatch(requestNewsFromTheSource(null));
        dispatch(requestNewsByQuery(query));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRow);
