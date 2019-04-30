import { NEWS } from '../../src/actions/types';
import searchBy from '../../src/reducers/searchBy';

describe('SearchBy reducer', () => {
    test('INITIAL STATE is correct', () => {
        const initialState = null;
        const action = { type: 'UNKNOWN_TYPE' };
        expect(searchBy(undefined, action)).toEqual(initialState);
    });

    test('Query is added', () => {
        const query = 'trump';
        const action = {
            type: NEWS.REQUEST_NEWS,
            query,
        };
        const expectedState = query;
        expect(searchBy(undefined, action)).toEqual(expectedState);
    });
});
