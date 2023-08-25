import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductUrl, STATUS } from "./constant";
import axios from "axios";


export const productThunk = createAsyncThunk("product/fetch", async (state) => {
    try {
        let res = await axios.get(ProductUrl, {
            params: state
        })
        return res.data
    } catch (error) {
        return error
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.LOADING,
        error: ""
    },
    reducers: {
        setProduct(state, action) {
            console.log(state.data)
        }
    },
    extraReducers(builder) {
        builder.addCase(productThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUS.IDLE
        })
        builder.addCase(productThunk.rejected, (state, action) => {
            state.status = STATUS.ERROR
            state.error = action.payload
        })
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer