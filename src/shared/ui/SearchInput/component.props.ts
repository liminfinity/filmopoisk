import { InputHTMLAttributes } from "react";

export interface ISearchInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	onClear?: () => void;
}
