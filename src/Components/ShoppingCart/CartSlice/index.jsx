import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    venues: [],
    addons: [],
    meals: [],
};

// Reusable utility functions for cart
const cartUtils = {
    addItemToCart(state, category, payload) {
        const existingItem = state[category].find(item => item.id === payload.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state[category].push({ ...payload, quantity: 1 });
        }
    },

    removeItemFromCart(state, category, id) {
        state[category] = state[category].filter(item => item.id !== id);
    },

    clearItemsFromCart(state, category) {
        state[category] = [];
    },

    increaseItemQuantity(state, category, id) {
        const itemToIncrease = state[category].find(item => item.id === id);
        if (itemToIncrease) {
            itemToIncrease.quantity += 1;
        }
    },

    decreaseItemQuantity(state, category, id) {
        const itemToDecrease = state[category].find(item => item.id === id);
        if (itemToDecrease && itemToDecrease.quantity > 1) {
            itemToDecrease.quantity -= 1;
        }
    }
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            cartUtils.addItemToCart(state, action.payload.category, action.payload.item);
        },

        removeItem(state, action) {
            cartUtils.removeItemFromCart(state, action.payload.category, action.payload.id);
        },

        clearItems(state, action) {
            cartUtils.clearItemsFromCart(state, action.payload.category);
        },

        increaseItemQuantity(state, action) {
            cartUtils.increaseItemQuantity(state, action.payload.category, action.payload.id);
        },

        decreaseItemQuantity(state, action) {
            cartUtils.decreaseItemQuantity(state, action.payload.category, action.payload.id);
        }
    }
});

export const {
    addItem,
    removeItem,
    clearItems,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
