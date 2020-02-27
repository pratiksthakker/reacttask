const API_BASE_ADDRESS = 'http://localhost:8080';

export default class Api {
    static getItems() {
        const uri = API_BASE_ADDRESS + "/items";

        return fetch(uri, {
            method: 'GET'
        });
    }

    static processCartItem(payload) {
        const uri = API_BASE_ADDRESS + "/addToCart";

        return fetch(uri, {
            method: 'POST',
            body: JSON.stringify(payload)
        })
    }
}