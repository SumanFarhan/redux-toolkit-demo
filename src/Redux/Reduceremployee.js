import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload);
        },
    }
})
export const { addUser } = employeeSlice.actions
export default employeeSlice.reducer

