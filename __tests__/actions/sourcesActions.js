import configureStore from 'redux-mock-store';
import {
    requestSources,
    sourcesGot,
    sourcesRequestError,
} from '../../src/actions/sourcesActions';
import { SOURCES } from '../../src/actions/types';

const mockStore = configureStore();
const store = mockStore();

describe('Sources actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('requestSources', () => {
        const expectedActions = [
            {
                type: SOURCES.REQUEST_SOURCES,
            },
        ];
        store.dispatch(requestSources());
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('sourcesGot', () => {
        const sourcesSortedList = [
            {
                letter: 'A',
                entities: [{
                    id: 1,
                    name: 'BBC',
                }],
            },
        ];
        const expectedActions = [
            {
                type: SOURCES.REQUEST_SOURCES_SUCCESS,
                sourcesSortedList,
            },
        ];
        store.dispatch(sourcesGot(sourcesSortedList));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('sourcesRequestError', () => {
        const error = 'Something went wrong!';
        const expectedActions = [
            {
                type: SOURCES.REQUEST_SOURCES_ERROR,
                error,
            },
        ];
        store.dispatch(sourcesRequestError(error));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
