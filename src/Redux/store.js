import { configureStore } from "@reduxjs/toolkit";
import Reducercounter from "./Reducercounter";
import Reduceremployee from "./Reduceremployee";

export const store=configureStore({
    reducer:{
        counter:Reducercounter,
        employee:Reduceremployee
    },
})