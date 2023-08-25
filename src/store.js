import { configureStore } from "@reduxjs/toolkit";
import Product from './slice/productSlice'
import Card from "./slice/cardSlice"

const store = configureStore({
    reducer: {
        Product,
        Card,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store