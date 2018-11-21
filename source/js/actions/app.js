import api from 'api';
import {
    ASYNC_START,
    ASYNC_ERROR,
    ASYNC_SUCCESS,
    FETCH_ITEMS,
    RATE_ITEM,
} from './type';

const asyncStart = () => {
    return {
        type: ASYNC_START,
    };
}

const asyncSuccess = () => {
    return {
        type: ASYNC_SUCCESS,
    };
}

const asyncError = error => {
    return {
        type: ASYNC_ERROR,
        error,
    };
}

export const fetchItems = () => dispatch => {
    dispatch(asyncStart());

    return api.fetchItems()
        .then(data => {
            dispatch(asyncSuccess());

            return dispatch({
                type: FETCH_ITEMS,
                data,
            });
        })
        .catch(error => dispatch(asyncError(error)));
};

export const rateItem = (itemId, stars) => dispatch => {
    return dispatch({
        type: RATE_ITEM,
        data: {
            itemId, stars
        },
    });
};
