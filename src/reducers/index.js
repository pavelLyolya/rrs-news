import { combineReducers } from 'redux';
import news from './news';
import sources from './sources';

export default combineReducers({
    news,
    sources,
});
