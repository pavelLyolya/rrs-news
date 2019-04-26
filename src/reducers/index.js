import { combineReducers } from 'redux';
import news from './news';
import sources from './sources';
import showOnlyFrom from './showOnlyFrom';
import searchBy from './searchBy';

export default combineReducers({
    news,
    sources,
    showOnlyFrom,
    searchBy,
});
