import { NEWS } from '../actions/types';

const searchBy = (state = null, { type, query }) => {
    if (type === NEWS.REQUEST_NEWS && (query || query === null)) {
        return query;
    }
    return state;
};

export default searchBy;
