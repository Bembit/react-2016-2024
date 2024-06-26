import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants';


export const addToCart = (productId, quantity) => async(dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            quantity,
            discountPercent: data.discountPercent,
        },
    });
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cartDetails.cartItems));
};


export const removeFromCart = (productId) => async(dispatch, getState) => {
    
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cartDetails.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    });
}