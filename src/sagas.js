import { takeEvery, call, put } from 'redux-saga/effects';
import { NEWS, SOURCES } from './actions/types';
import { fetchNewsFromApi, fetchSourcesFromApi } from './api';
import { newsGot, newsRequestError } from './actions/newsActions';
import { sourcesGot, sourcesRequestError } from './actions/sourcesActions';
import sortSourcesByNames from './helpers/sortSourcesByNames';

function* fetchNews() {
    try {
        const response = yield call(fetchNewsFromApi);
        yield put(newsGot(response.articles));
    } catch (error) {
        yield put(newsRequestError(error));
    }
}

function* fetchSources() {
    try {
        const response = yield call(fetchSourcesFromApi);
        const sortedSources = sortSourcesByNames(response.sources);
        yield put(sourcesGot(sortedSources));
    } catch (error) {
        yield put(sourcesRequestError(error));
    }
}

export default function* rootSaga() {
    yield takeEvery(NEWS.REQUEST_NEWS, fetchNews);
    yield takeEvery(SOURCES.REQUEST_SOURCES, fetchSources);
}
