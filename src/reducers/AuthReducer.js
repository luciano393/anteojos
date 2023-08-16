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

export const getUserAction = ({ id }) => async dispatch => {
    try {
      const res = await apiServer.get(`http://localhost:9000/users/${id}`, {
        headers:  {
            Authorization: getToken()
        }
      })
      dispatch(login(res.data.data))
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