import { createSlice } from '@reduxjs/toolkit';
import apiServer from '../services/server';

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
        unSelected: (state) => {
            state.selected = initialState.selected
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
    unSelected
} = productSlice.actions;

export const getProducts = () => async dispatch => {
    await apiServer
        .get("http://localhost:9000/product")
        .then((res) => {
            if(res.status === 200) {
                dispatch(loadProducts(res.data));
            } else {
                console.log("No hay productos para mostrar");
            }
        })
        .catch((e) => {
            console.log(e)
            console.log("Error de servidor");
        })
}

export default productSlice.reducer;