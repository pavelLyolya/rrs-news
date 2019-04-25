import { NEWS } from '../actions/types';

const defaultState = {
    isLoading: false,
    newsList: [],
    error: null,
};

const news = (state = defaultState, { type, newsList, error }) => {
    switch (type) {
        case NEWS.REQUEST_NEWS:
            return {
                ...state,
                isLoading: true,
            };
        case NEWS.REQUEST_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newsList: state.newsList.concat(newsList),
            };
        case NEWS.REQUEST_NEWS_ERROR:
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
