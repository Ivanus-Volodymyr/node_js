import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userServices} from "../../services/user.services";
import {IUser} from "../../interfaces/registration.interfase";

const initialState = {
    result: [],
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (data: Partial<IUser>, {dispatch, getState}) => {
        const loginResponse = await userServices.login(data);
        console.log('---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Node response LOGIN-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log(loginResponse);
        console.log('---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Node response LOGIN-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    })

export const registrationUser = createAsyncThunk(
    'user/registration',
    async (data: IUser, {dispatch, getState}) => {
        const registrationResponse = await userServices.registration(data);
        console.log('---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Node response REGISTRATION-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        console.log(registrationResponse);
        console.log('---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Node response REGISTRATION-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

const userReducer = userSlice.reducer;
export default userReducer;
