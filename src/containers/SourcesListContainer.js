import { connect } from 'react-redux';
import SourcesList from '../components/Content/SourcesList';
import { requestSources } from '../actions/sourcesActions';

const mapStateToProps = state => ({
    sourcesSortedList: state.sources.sourcesSortedList,
    isLoading: state.sources.isLoading,
    error: state.sources.error,
});

const mapDispatchToProps = dispatch => ({
    requestSources: () => dispatch(requestSources()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SourcesList);
