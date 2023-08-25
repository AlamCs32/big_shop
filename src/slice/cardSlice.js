import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardUrl, STATUS } from "./constant";
import axios from "axios";

export const CardThunk = createAsyncThunk("Card/add", async (state) => {
    try {
        let res = await axios({
            method: "POST",
            url: `${CardUrl}/${state.id}`,
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${state.token}`
            },
            data: {
                quantity: state.quantity
            }
        })
        return res.data
    } catch (error) {
        return error
    }
})

const CardSlice = createSlice({
    name: "card",
    initialState: {
        data: [],
        status: STATUS.LOADING
    },
    extraReducers(builder) {
        builder.addCase(CardThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUS.IDLE
        })
        builder.addCase(CardThunk.rejected, (state, action) => {
            state.data.push(action.payload)
            state.status = STATUS.ERROR
        })
    }
})

export default CardSlice.reducer