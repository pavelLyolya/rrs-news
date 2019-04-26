import { combineReducers } from 'redux';
import news from './news';
import sources from './sources';
import showOnlyFrom from './showOnlyFrom';

export default combineReducers({
    news,
    sources,
    showOnlyFrom,
});
