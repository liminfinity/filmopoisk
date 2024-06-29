import { ButtonHTMLAttributes } from "react";

type Variant = "filled" | "outlined";

export interface IButtonProps extends 
ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}
