import { combineReducers } from "redux";
import userReducer from "./user.slice";
import productsReducer from "./products.slice";

export default combineReducers({
     authState: userReducer,
     productsState:productsReducer
})