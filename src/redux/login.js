import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        email: "",
        password: "",
        name: ""
    }, 
    reducers: {
        login: (state, action) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.token = ""
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }
});

export const {login, logout, setEmail, setPassword, setName} = loginSlice.actions
export default loginSlice.reducer