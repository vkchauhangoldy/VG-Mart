import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMenShirts = createAsyncThunk('data/menShirt', async () => {
    let response = await fetch("https://dummyjson.com/products/category/mens-shirts");
    let data = await response.json();
    return data;
})
export const fetchMenWatches = createAsyncThunk('data/menWatches', async () => {
    let response = await fetch("https://dummyjson.com/products/category/mens-watches");
    let data = await response.json();
    return data;
})
export const fetchMenShoes = createAsyncThunk('data/menShoes', async () => {
    let response = await fetch("https://dummyjson.com/products/category/mens-shoes");
    let data = await response.json();
    return data;
})

const initialState = {
    shirts: [],
    watches: [],
    shoes: [],
    status: 'idle'
};

export const apiSlice = createSlice({
    name: "prodcut",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenShirts.fulfilled, (state, action) => {
                state.status = "Succeeded";
                state.shirts = action.payload;
            })
            .addCase(fetchMenWatches.fulfilled, (state, action) => {
                state.status = "Succeeded";
                state.watches = action.payload;
            })
            .addCase(fetchMenShoes.fulfilled, (state, action) => {
                state.status = "Succeeded";
                state.shoes = action.payload;
            })
    }
});

export default apiSlice.reducer;
