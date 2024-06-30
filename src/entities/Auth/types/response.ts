import { IResponseError } from "@shared/types"

interface ILoginResponseSuccess {
    token: string
}

interface ILoginResponseError extends IResponseError {}

type ILoginResponse = ILoginResponseSuccess | ILoginResponseError



export type {ILoginResponse, ILoginResponseSuccess, ILoginResponseError}