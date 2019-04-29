import { SOURCES } from '../../src/actions/types';
import sources from '../../src/reducers/sources';

describe('Sources reducer', () => {
    test('INITIAL STATE is correct', () => {
        const initialState = {
            isLoading: false,
            sourcesSortedList: [],
            error: null,
        };
        const action = { type: 'UNKNOWN_TYPE' };
        expect(sources(undefined, action)).toEqual(initialState);
    });

    test('isLoading changes while requesting', () => {
        const action = {
            type: SOURCES.REQUEST_SOURCES,
        };
        const expectedState = {
            isLoading: true,
            sourcesSortedList: [],
            error: null,
        };
        expect(sources(undefined, action)).toEqual(expectedState);
    });

    test('getting response sourcesList', () => {
        const sourcesSortedList = [
            {
                title: '1 Latest sources from Belarus',
                article: 'Potatoes is great! - they said...',
            },
            {
                title: '2 Latest sources from Belarus',
                article: 'Potatoes is great! - they said...',
            },
        ];
        const action = {
            type: SOURCES.REQUEST_SOURCES_SUCCESS,
            sourcesSortedList,
        };
        const expectedState = {
            isLoading: false,
            sourcesSortedList,
            error: null,
        };
        expect(sources(undefined, action)).toEqual(expectedState);
    });

    test('getting error response', () => {
        const error = 'Ooops!!';
        const action = {
            type: SOURCES.REQUEST_SOURCES_ERROR,
            error,
        };
        const expectedState = {
            isLoading: false,
            sourcesSortedList: [],
            error,
        };
        expect(sources(undefined, action)).toEqual(expectedState);
    });
});
