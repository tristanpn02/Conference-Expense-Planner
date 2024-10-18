import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    venues: [],
    addons: [],
    meals: [],
    people: 0,
};

// Helper to find an item by ID
const findItemById = (items, id) => items.find(item => item.id === id);

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const { category, item } = action.payload;
            const existingItem = findItemById(state[category], item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state[category].push({ ...item, quantity: 1 });
            }
        },

        removeItem(state, action) {
            const { category, id } = action.payload;
            state[category] = state[category].filter(item => item.id !== id);
        },

        clearItems(state, action) {
            const { category } = action.payload;
            state[category] = [];
        },

        clearCart(state) {
            state.venues = [];
            state.addons = [];
            state.meals = [];
            state.people = 0;
        },

        increaseItemQuantity(state, action) {
            const { category, id } = action.payload;
            const item = findItemById(state[category], id);
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseItemQuantity(state, action) {
            const { category, id } = action.payload;
            const item = findItemById(state[category], id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state[category] = state[category].filter(i => i.id !== id);
                }
            }
        },

        setPeopleQuantity(state, action) {
            state.people = action.payload;
        }
    }
});

export const {
    addItem,
    removeItem,
    clearItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    setPeopleQuantity,
    clearCart
} = CartSlice.actions;

export default CartSlice.reducer;
