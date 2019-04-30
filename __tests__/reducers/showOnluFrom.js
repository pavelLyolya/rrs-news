import { NEWS } from '../../src/actions/types';
import showOnlyFrom from '../../src/reducers/showOnlyFrom';

describe('ShowOnlyFrom reducer', () => {
    test('INITIAL STATE is correct', () => {
        const initialState = null;
        const action = { type: 'UNKNOWN_TYPE' };
        expect(showOnlyFrom(undefined, action)).toEqual(initialState);
    });

    test('isLoading changes while requesting', () => {
        const sourceId = 12345;
        const action = {
            type: NEWS.REQUEST_NEWS,
            sourceId,
        };
        const expectedState = sourceId;
        expect(showOnlyFrom(undefined, action)).toEqual(expectedState);
    });
});
