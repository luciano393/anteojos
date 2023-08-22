import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {}

export const usersSlice = createSlice({
    name: "users",
    initialState: { value: initialStateValue},
    reducers: {
        usersList: (state, action) => {
            state.value = action.payload;
        },
        userCurrent: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {usersList, userCurrent} = usersSlice.actions;

export default usersSlice.reducer;