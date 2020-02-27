export const LOAD_ITEMS_LOADING = 'REDUX_SAGA_LOAD_ITEMS_LOADING';
export const LOAD_ITEMS_SUCCESS = 'REDUX_SAGA_LOAD_ITEMS_SUCCESS';
export const LOAD_ITEMS_ERROR = 'REDUX_SAGA_LOAD_ITEMS_ERROR';

export const loadItems = () => dispatch => {
    dispatch({ type: LOAD_ITEMS_LOADING});
};
