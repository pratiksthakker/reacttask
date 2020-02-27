import { LOAD_ITEMS_ERROR, LOAD_ITEMS_LOADING, LOAD_ITEMS_SUCCESS } from "./actions";
import {CALCULATE_DISCOUNT_SUCCESS} from "../cart/cartactions"

const initialState = {
    shoppingItems: [],
    selectItemsInCart: [],
    selectTotalPrice: 0,
    discountedPrice:0.0,
    discountPerc:0.0,
    discountDescription:"",
    orderCompleted:"N",
    loading: false,
    couponCode:"",
    error: ''
};

export default function reduxSagaReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_ITEMS_SUCCESS: {
            return {
                ...state,
                shoppingItems: action.data,
                loading: false
            }
        }
        case LOAD_ITEMS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        case CALCULATE_DISCOUNT_SUCCESS: {
            return {
                ...state,
                discountedPrice: action.data.newCart.discounted_price, 
                discountPerc:action.data.newCart.discount_percent,
                discountDescription:action.data.newCart.discount_desc,
                loading: false
            };
        }
        case 'ADD_ITEM_TO_CART':
            return {
                ...state, 
                shoppingItems: addItemToCart(state.shoppingItems, action.payload.itemName)
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state, 
                shoppingItems: removeItemFromCart(state.shoppingItems, action.payload.itemName)
            };
        default: {
            return state;
        }
    }
}

const addItemToCart = (array, itemName) => {
    return array.map((item) => {
        if (item.id !== itemName) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            quantity: item.quantity + 1
        };
    });
}

const removeItemFromCart = (array, itemName) => {
    return array.map((item) => {
        if (item.id !== itemName) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            quantity: item.quantity > 0 ? item.quantity - 1 : 0
        };
    });
}
