import configureStore from 'redux-mock-store';
import {
    requestNews,
    requestNewsFromTheSource,
    requestNewsByQuery,
    newsGot,
    newsRequestError,
    addShownNews,
} from '../../src/actions/newsActions';
import { NEWS } from '../../src/actions/types';

const mockStore = configureStore();
const store = mockStore();

describe('News actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('requestNews', () => {
        const expectedActions = [
            {
                type: NEWS.REQUEST_NEWS,
            },
        ];
        store.dispatch(requestNews());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('requestNewsFromTheSource', () => {
        const sourceId = 12345;
        const expectedActions = [
            {
                type: NEWS.REQUEST_NEWS,
                sourceId,
            },
        ];
        store.dispatch(requestNewsFromTheSource(sourceId));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('requestNewsByQuery', () => {
        const query = 'trump';
        const expectedActions = [
            {
                type: NEWS.REQUEST_NEWS,
                query,
            },
        ];
        store.dispatch(requestNewsByQuery(query));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('newsGot', () => {
        const newsList = [
            {
                title: '1 Latest news from Belarus',
                article: 'Potatoes is great! - they said...',
            },
            {
                title: '2 Latest news from Belarus',
                article: 'Potatoes is great! - they said...',
            },
        ];
        const expectedActions = [
            {
                type: NEWS.REQUEST_NEWS_SUCCESS,
                newsList,
            },
        ];
        store.dispatch(newsGot(newsList));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('newsRequestError', () => {
        const error = 'Somathing went wrong!!!';
        const expectedActions = [
            {
                type: NEWS.REQUEST_NEWS_ERROR,
                error,
            },
        ];
        store.dispatch(newsRequestError(error));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('addShownNews', () => {
        const newsList = [
            {
                title: '1 Latest news from Belarus',
                article: 'Potatoes is great! - they said...',
            },
            {
                title: '2 Latest news from Belarus',
                article: 'Potatoes is great! - they said...',
            },
        ];
        const shownNews = [
            {
                title: '1 Latest news from Belarus',
                article: 'Potatoes is great! - they said...',
            },
        ];
        const howMuchIsShown = 1;
        const expectedActions = [
            {
                type: NEWS.ADD_SHOWN_NEWS,
                shownNews,
                howMuchIsShown,
            },
        ];
        store.dispatch(addShownNews(newsList, howMuchIsShown));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
