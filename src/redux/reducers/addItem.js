const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                // If item exists, increase its quantity
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
                );
            } else {
                // If item is new, add it to the state with quantity 1
                return [
                    ...state,
                    { ...action.payload, quantity: 1 }
                ];
            }

        case "DELITEM":
            return state.filter((x) => x.id !== action.payload.id);

        case "INCREMENT_ITEM":
            return state.map((x) =>
                x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
            );

        case "DECREMENT_ITEM":
            return state.map((x) =>
                x.id === action.payload.id && x.quantity > 1
                    ? { ...x, quantity: x.quantity - 1 }
                    : x
            );

        case "CLEAR_CART": // Added clear cart functionality
            return [];

        default:
            return state;
    }
};

export default addItems;
