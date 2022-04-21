import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slice/movie.slice";
import userReducer from "./slice/user.slice";

const rootReducer = combineReducers({
    movieReducer,
    userReducer
});

export const mainStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof mainStore>;
export type AppDispatch = AppStore['dispatch'];
