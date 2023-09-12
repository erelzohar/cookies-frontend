import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductModel from "../../Models/ProductModel";
import CategoryModel from "../../Models/CategoryModel";

export class ProductsState {
    public products: ProductModel[];
    public categories: CategoryModel[];
}


const initialState: ProductsState = {
    products: null,
    categories: null
}

const productsReducer = createSlice({
    name: "productsReducer",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        setCategories: (state, action: PayloadAction<CategoryModel[]>) => {
            state.categories = action.payload;
        },
        addProduct: (state, action: PayloadAction<ProductModel>) => {
            state.products.unshift(action.payload);
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const index = state.products.findIndex(product => product._id === action.payload);
            if (index < 0) return;
            state.products.splice(index, 1);
        }
    }
});

export const { setProducts, setCategories, addProduct, deleteProduct } = productsReducer.actions;

export default productsReducer.reducer;