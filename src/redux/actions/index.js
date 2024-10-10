// Existing actions
export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    };
};

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload: product
    };
};

export const incrementItem = (product) => {
    return {
        type: "INCREMENT_ITEM",
        payload: product
    };
};

export const decrementItem = (product) => {
    return {
        type: "DECREMENT_ITEM",
        payload: product
    };
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    };
};

// Updated login action to include user data
export const login = (userInfo) => {
    return {
        type: "LOGIN",
        payload: userInfo // Add user information to payload
    };
};

export const logout = () => {
    return {
        type: "LOGOUT"
    };
};
