import addItems from "./addItem";
import { combineReducers } from "redux";

// Updated reducer to handle authentication (isLoggedIn and userInfo)
const authReducer = (state = { isLoggedIn: false, userInfo: null }, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                userInfo: action.payload // Store user info in the state
            };
        case "LOGOUT":
            return {
                isLoggedIn: false,
                userInfo: null // Clear user info on logout
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducers = combineReducers({
    addItem: addItems, // Existing reducer
    auth: authReducer  // New auth reducer
});

export default rootReducers;
