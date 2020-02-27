export const CALCULATE_DISCOUNT = 'CALCULATE_DISCOUNT';
export const CALCULATE_DISCOUNT_SUCCESS = 'CALCULATE_DISCOUNT_SUCCESS';
export const CHECK_OUT = 'CHECK_OUT';

export const calculateDiscount = (items,couponCode) => dispatch => {
    dispatch({ type: CALCULATE_DISCOUNT,payload: {items,couponCode}});
};