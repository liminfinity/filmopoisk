import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { isFulfilled, isPending, isRejected } from "@shared/lib";
import { IResponseError } from "@shared/types";
import { login, logout } from "./thunks";
import { SLICE_NAME } from "./consts";

const AuthSlice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {},
	selectors: {
		isLoading: (state) => state.status === "pending",
		isSuccess: (state) => state.status === "fulfilled",
		isError: (state) => state.status === "rejected",
		isIdle: (state) => state.status === "idle",
		getErrors: (state) => state.errors,
		getStatus: (state) => state.status,
	},
	extraReducers: builder => {
		builder
			.addMatcher(isFulfilled, state => {
				state.status = 'fulfilled';
				state.errors = [];
			})
			.addMatcher(isPending, state => {
				state.status = 'pending';
				state.errors = [];
			})
			.addMatcher(
				isRejected,
				(state, action: PayloadAction<IResponseError>) => {
					state.status = 'rejected';
					state.errors.push(action.payload);
				},
			);
	},
});

const { reducer, selectors } = AuthSlice;

const actions = {
	...AuthSlice.actions,
	logout,
	login,
};

export { reducer, selectors, actions };

