import { NEWS } from '../actions/types';

const showOnlyFrom = (state = null, { type, sourceId }) => {
    if (type === NEWS.REQUEST_NEWS && (sourceId || sourceId === null)) {
        return sourceId;
    }
    return state;
};

export default showOnlyFrom;
