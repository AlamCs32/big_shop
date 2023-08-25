import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductUrl, STATUS } from "./constant";

export const ProductThunk = createAsyncThunk("Product", async () => {
    let response = await fetch(ProductUrl)
    let result = await response.json()
    return result
})

const TestSlice = createSlice({
    name: "Test",
    initialState: {
        data: [],
        status: STATUS.LOADING
    },
    reducers: {
        add(state, action) {
            state.data = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(ProductThunk.pending, (state) => {
            state.status = STATUS.LOADING
        })
        builder.addCase(ProductThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUS.IDLE
        })
        builder.addCase(ProductThunk.rejected, (state) => {
            state.status = STATUS.ERROR
        })

    }
})

export const { add } = TestSlice.actions
export default TestSlice.reducer