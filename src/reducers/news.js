import { NEWS } from '../actions/types';

export const defaultState = {
    isLoading: false,
    newsList: [],
    shownNews: [],
    howMuchIsShown: 5,
    error: null,
};

const news = (
    state = defaultState,
    {
        type,
        newsList,
        error,
        shownNews,
        howMuchIsShown,
    },
) => {
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
                newsList,
            };
        case NEWS.REQUEST_NEWS_ERROR:
            return {
                ...state,
                isLoading: false,
                error,
            };
        case NEWS.ADD_SHOWN_NEWS:
            return {
                ...state,
                shownNews,
                howMuchIsShown,
            };
        default:
            return state;
    }
};

export default news;
