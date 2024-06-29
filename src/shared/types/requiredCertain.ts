export type RequiredCertain<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? Required<Pick<T, P>> : T[P];
};