import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "@entities/Auth/model";
import MovieApi from "@entities/Movie/api";

const mainReducer = combineReducers({
	auth: authReducer,
	[MovieApi.reducerPath]: MovieApi.reducer,
});

const Store = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(MovieApi.middleware),
});

export { Store };
