import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const products = await axiosInstance.get( "/products" );
        return products.data;
    }
);

const productsSlice = createSlice( {
    name: "products",
    initialState: {},
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase( getProducts.pending, ( state ) => {
            state.isLoading = true;
        } );
        builder.addCase( getProducts.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.list = action.payload.products;
        } );
        builder.addCase( getProducts.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message;
        } );
    },
} );
export default productsSlice.reducer;
