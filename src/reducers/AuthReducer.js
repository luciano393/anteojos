import { createSlice } from '@reduxjs/toolkit';
import getToken from '../helpers/UseGetToken';
import apiServer from '../services/server';
import { userCurrent } from './UserReducer';

const initialState = false

export const authSlice = createSlice({
    name: 'auth',
    initialState: { value: initialState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialState;
        },
    }
})

export const {login, logout} = authSlice.actions;

export const getUserAction = () => async dispatch => {
    const token = getToken()
    if(!token) {
      return 
    }
    const res = await apiServer.get("http://localhost:9000/users/current", getToken())
    if(res) {
      dispatch(userCurrent(res.data))
      dispatch(login(true))
    } else {
      console.log("pero la puta madre")
    }
}

export const removeUserAction = () => dispatch => {
    localStorage.removeItem("token")
    dispatch(logout())
    getToken();
}

export default authSlice.reducer;