import { createSlice } from '@reduxjs/toolkit';
import getToken from '../helpers/UseGetToken';
import apiServer from '../services/server';

const initialStateValue = {
    name: "",
    email: "",
    phone: "",
    id: "",
    token: ""
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: { initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialStateValue;
        },
    }
})

export const {login, logout} = authSlice.actions;

export const getUserActionJwt = () => async dispatch => {
  try {
    const user = await apiServer.get("http://localhost:9000/users/authenticate/me", {
    headers: {
      Authorization: getToken()
    }
    })
    dispatch(login(user))
  } catch(e) {
    console.log(e)
  }
}

export const getUserAction = (u) => async dispatch => {
    try {
      await dispatch(login(u))
    } catch (error) {
      console.log(error)
    }
}

export const removeUserAction = () => dispatch => {
    localStorage.removeItem("token")
    dispatch(logout())
    getToken();
}

export default authSlice.reducer;