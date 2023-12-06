import { configureStore } from "@reduxjs/toolkit/react"
import reducer from "./Global/Redoxstate"
export const store = configureStore({
    reducer
})