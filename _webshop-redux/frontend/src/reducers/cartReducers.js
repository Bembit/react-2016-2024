import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            // found.product is the ID of product
            const existingItem = state.cartItems.find( found => found.product === item.product );
            if(existingItem) {
               return {
                   ...state,
                   cartItems: state.cartItems.map( found => found.product === existingItem.product ? item : found )
               };
            } else {
                return {
                    ...state,
                    cartItems: [ ...state.cartItems, item ]
                };
            }            
        case CART_REMOVE_ITEM:
            return { 
                    ...state,
                    cartItems: state.cartItems.filter( item => item.product !== action.payload )
            };

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                    ...state,
                    shippingAddress: action.payload
            };   
        
        case CART_SAVE_PAYMENT_METHOD:
            return {
                    ...state,
                    paymentMethod: action.payload
            };

    default:
        return state;
    }
}