// export const addItemToCart = (itemName) => {
//     return {
//         type: 'ADD_ITEM_TO_CART',
//         payload: {
//             itemName
//         }
//     }
// }

export const addItemToCart = (itemName) => {
    return{
       type: 'ADD_ITEM_TO_CART',
       payload: {
             itemName,

            }
    };
};

export const removeItemFromCart = (itemName) => {
    return{
        type: 'REMOVE_ITEM_FROM_CART',
        payload: {
             itemName,
             
            }
     };
};

// export const removeItemFromCart = (itemName) => {
//     return {
//         type: 'REMOVE_ITEM_FROM_CART',
//         payload: {
//             itemName
//         }
//     }
// }

export const ActionTypes = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART"
}