import { takeLatest, call, put } from 'redux-saga/effects';
import { NEWS, SOURCES } from './actions/types';
import { fetchNewsFromApi, fetchSourcesFromApi } from './api';
import { newsGot, newsRequestError, addShownNews } from './actions/newsActions';
import { sourcesGot, sourcesRequestError } from './actions/sourcesActions';
import sortSourcesByNames from './helpers/sortSourcesByNames';

export function* fetchNews(action) {
    try {
        let response;
        if (action.sourceId) {
            response = yield call(fetchNewsFromApi, action.sourceId);
        } else if (action.query) {
            response = yield call(fetchNewsFromApi, null, action.query);
        } else {
            response = yield call(fetchNewsFromApi);
        }
        yield put(newsGot(response.articles));
        yield put(addShownNews(response.articles));
    } catch (error) {
        yield put(newsRequestError(error));
    }
}

export function* fetchSources() {
    try {
        const response = yield call(fetchSourcesFromApi);
        const sortedSources = sortSourcesByNames(response.sources);
        yield put(sourcesGot(sortedSources));
    } catch (error) {
        yield put(sourcesRequestError(error));
    }
}

export default function* rootSaga() {
    yield takeLatest(NEWS.REQUEST_NEWS, fetchNews);
    yield takeLatest(SOURCES.REQUEST_SOURCES, fetchSources);
}
