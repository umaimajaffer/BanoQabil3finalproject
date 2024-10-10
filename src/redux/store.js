import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust this path to your reducers

const store = createStore(rootReducer);

export default store;
