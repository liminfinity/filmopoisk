import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../consts";
import { IResponseError } from "@shared/types";

const logout = createAsyncThunk<
	void,
	undefined,
	{ rejectValue: IResponseError }
>(`${SLICE_NAME}/logout`, async () => {
	localStorage.removeItem("token");
});

export { logout };
