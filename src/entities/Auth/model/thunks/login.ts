import { $api } from "@app/api";
import { ILoginRequest, ILoginResponse, ILoginResponseError, ILoginResponseSuccess } from "@entities/Auth/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE_NAME } from "../consts";

const isSuccess = (data: ILoginResponse): data is ILoginResponseSuccess => 'token' in data;

const login = createAsyncThunk<
    void,
	ILoginRequest,
	{ rejectValue: ILoginResponseError }
>(`${SLICE_NAME}/login`, async (req, { rejectWithValue }) => {
    const {data} = await $api.post<ILoginResponse>("/login", req);
    if (isSuccess(data)) localStorage.setItem('token', data.token);
    else return rejectWithValue(data);
});

export { login };