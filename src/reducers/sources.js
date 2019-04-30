import { SOURCES } from '../actions/types';

export const defaultState = {
    isLoading: false,
    sourcesSortedList: [],
    error: null,
};

const news = (state = defaultState, { type, sourcesSortedList, error }) => {
    switch (type) {
        case SOURCES.REQUEST_SOURCES:
            return {
                ...state,
                isLoading: true,
            };
        case SOURCES.REQUEST_SOURCES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sourcesSortedList: state.sourcesSortedList.concat(sourcesSortedList),
            };
        case SOURCES.REQUEST_SOURCES_ERROR:
            return {
                ...state,
                isLoading: false,
                error,
            };
        default:
            return state;
    }
};

export default news;
