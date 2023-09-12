import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserModel from "../../Models/UserModel";

export class AuthState{
    public user:UserModel;
}


const initialState: AuthState = {
    user : null
}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<UserModel>) => {
            state.user = action.payload;
        },
        userLoggedOut: (state) => {
            state.user = null;
        },
    }
});

export const { userLoggedIn, userLoggedOut } = userReducer.actions;

export default userReducer.reducer;