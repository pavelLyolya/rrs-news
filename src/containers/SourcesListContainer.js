import { connect } from 'react-redux';
import SourcesList from '../components/Content/SourcesList';
import { requestSources } from '../actions/sourcesActions';
import { requestNewsByQuery, requestNewsFromTheSource } from '../actions/newsActions';

const mapStateToProps = state => ({
    sourcesSortedList: state.sources.sourcesSortedList,
    isLoading: state.sources.isLoading,
    error: state.sources.error,
    showOnlyFrom: state.showOnlyFrom,
});

const mapDispatchToProps = dispatch => ({
    requestSources: () => dispatch(requestSources()),
    requestNewsFromTheSource: (sourceId) => {
        dispatch(requestNewsByQuery(null));
        dispatch(requestNewsFromTheSource(sourceId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SourcesList);
