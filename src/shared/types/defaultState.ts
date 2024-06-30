import { IResponseError } from "./responseError"


type Status = 'idle' | 'pending' | 'fulfilled' | 'rejected'

interface IDefaultState {
    status: Status
    errors: IResponseError[] 
}

export type {IDefaultState}