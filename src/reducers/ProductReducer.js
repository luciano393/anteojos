import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selected: {
        _id: null,
        model: null,
        category: null,
        price: null,
        image: null,
        createDate: null
    }
}

export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload;
        },
        deleteProducts: (state, action) => {
            state.products = state.products.filter((a) => a.id !== action.payload);
        },
        editProducts: (state, action) => {
            const index = state.products
                .map((product) => product.id)
                .indexOf(action.payload.id)
            state.products[index] = action.payload;
        },
        selectProduct: (state, action) => {
            if(action.payload)
                state.selected = state.products.filter(
            (product) => product.id === action.payload)[0];
        },
        editSelected: (state, action) => {
            state.selected = action.payload
        },
        addProduct: (state,action) => {
            state.products.unshift(action.payload)
        },
    },
});

export const {
    deleteProducts,
    loadProducts,
    editProducts,
    selectProduct,
    addProduct,
    editSelected
} = productSlice.actions;

export default productSlice.reducer;