import { NEWS } from '../../src/actions/types';
import news, { defaultState } from '../../src/reducers/news';

describe('News reducer', () => {
    test('INITIAL STATE is correct', () => {
        const action = { type: 'UNKNOWN_TYPE' };
        expect(news(undefined, action)).toEqual(defaultState);
    });

    test('isLoading changes while requesting', () => {
        const action = {
            type: NEWS.REQUEST_NEWS,
        };
        const expectedState = {
            ...defaultState,
            isLoading: true,
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
            ...defaultState,
            newsList,
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
            ...defaultState,
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
            ...defaultState,
            shownNews,
            howMuchIsShown,
        };
        expect(news(undefined, action)).toEqual(expectedState);
    });
});
