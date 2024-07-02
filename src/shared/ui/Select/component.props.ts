import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";

export interface ISelectProps<T extends ReactNode> extends IDefaultProps {
	options: T[];
	value?: T;
	label?: string;
	placeholder?: string;
	onChange?: (value: T) => void;
}
