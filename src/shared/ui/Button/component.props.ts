import { ButtonHTMLAttributes } from "react";

type Variant = "filled" | "outlined" | "icon";

export interface IButtonProps extends 
ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}
