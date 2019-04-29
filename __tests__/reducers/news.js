import { NEWS } from '../../src/actions/types';
import news from '../../src/reducers/news';

describe('News reducer', () => {
    test('INITIAL STATE is correct', () => {
        const initialState = {
            isLoading: false,
            newsList: [],
            shownNews: [],
            howMuchIsShown: 5,
            error: null,
        };
        const action = { type: 'UNKNOWN_TYPE' };
        expect(news(undefined, action)).toEqual(initialState);
    });

    test('isLoading changes while requesting', () => {
        const action = {
            type: NEWS.REQUEST_NEWS,
        };
        const expectedState = {
            isLoading: true,
            newsList: [],
            shownNews: [],
            howMuchIsShown: 5,
            error: null,
        };
        expect(news(undefined, action)).toEqual(expectedState);
    });

    test('getting response newsList', () => {
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
        const action = {
            type: NEWS.REQUEST_NEWS_SUCCESS,
            newsList,
        };
        const expectedState = {
            isLoading: false,
            newsList,
            shownNews: [],
            howMuchIsShown: 5,
            error: null,
        };
        expect(news(undefined, action)).toEqual(expectedState);
    });

    test('getting error response', () => {
        const error = 'Ooops!!';
        const action = {
            type: NEWS.REQUEST_NEWS_ERROR,
            error,
        };
        const expectedState = {
            isLoading: false,
            newsList: [],
            shownNews: [],
            howMuchIsShown: 5,
            error,
        };
        expect(news(undefined, action)).toEqual(expectedState);
    });

    test('adds shown news', () => {
        const shownNews = [
            {
                title: '1 Latest news from Belarus',
                article: 'Potatoes is great! - they said...',
            },
        ];
        const howMuchIsShown = 1;
        const action = {
            type: NEWS.ADD_SHOWN_NEWS,
            shownNews,
            howMuchIsShown,
        };
        const expectedState = {
            isLoading: false,
            newsList: [],
            shownNews,
            howMuchIsShown: 1,
            error: null,
        };
        expect(news(undefined, action)).toEqual(expectedState);
    });
});
