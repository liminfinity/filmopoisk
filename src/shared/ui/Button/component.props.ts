import { ButtonHTMLAttributes } from "react";

type Variant = "filled" | "outlined" | "icon" | "text";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
}
