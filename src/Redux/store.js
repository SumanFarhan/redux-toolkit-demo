import { configureStore } from "@reduxjs/toolkit";
import Reducercounter from "./Reducercounter";

export const store=configureStore({
    reducer:{
        counter:Reducercounter,
    },
})