import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CALCULATE_DISCOUNT,CALCULATE_DISCOUNT_SUCCESS,CHECK_OUT} from "./cartactions";
import Api from '../../api'

async function fetchAsync(func,payload) {
    const response = await func(payload);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Unexpected error!!!");
}

function* calculateDiscount(payload) {

    let shopItems = payload.payload.items;
    let couponCode = payload.payload.couponCode;
    let cart_items = [];

    shopItems.forEach((shopItem, i) => {
        console.log(shopItem)
        cart_items.push({
            id: shopItem.id,
            quantity: shopItem.quantity,
            price: shopItem.price
        })
    });

    const Cart ={
        user_name: "hello",
        order_id: 6,
        zip_code: "123",
        coupon_code:"",
        cart_items,
        total_price: 0,
        iscounted_price: 0,
        discount_percent: 0,
        discount_desc: "Hello"
    }

    try {
        const items = yield fetchAsync(Api.processCartItem,Cart)
        //const response = items.newCart.CartItems
        yield put({ type: CALCULATE_DISCOUNT_SUCCESS, data: items });
    } catch (e) {
        console.log("exception Occured",e.message)
    }
}

export function* cartSaga() {

    yield takeEvery(CALCULATE_DISCOUNT, calculateDiscount);

}

export default cartSaga;