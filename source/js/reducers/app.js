import { Map, List } from 'immutable';

import {
    ASYNC_START,
    ASYNC_ERROR,
    ASYNC_SUCCESS,
    FETCH_ITEMS,
    RATE_ITEM,
} from 'actions/type';

const initialState = Map({
    asyncLoading: false,
    asyncError: null,
    items: List(),
    ratedItem: Map(),
});

const actionsMap = {
    [FETCH_ITEMS]: (state, action) => {
        return state.merge({
            items: action.data,
        });
    },

    [RATE_ITEM]: (state, action) => {
        const { itemId, stars } = action.data;
        const items = state.get('items');
        const index = items.findIndex(item => item.get('itemId') === itemId);

        return state.merge({
            items: items.setIn([index, 'stars'], stars),
            ratedItem: action.data,
        });
    },

    // Async general actions
    [ASYNC_START]: state => {
        return state.merge({
            asyncLoading: true,
        });
    },

    [ASYNC_ERROR]: (state, action) => {
        return state.merge({
            asyncLoading: false,
            asyncError: action.error,
        });
    },

    [ASYNC_SUCCESS]: state => {
        return state.merge({
            asyncLoading: false,
        });
    },
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
