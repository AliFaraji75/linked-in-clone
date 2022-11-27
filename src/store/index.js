import { createStore, applyMiddleware } from "redux";
import rootreducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userState']
};
const persistedReducer = persistReducer(persistConfig, rootreducer);

let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);
export { store, persistor };
