import { IDefaultProps } from "@shared/types";

export interface ISelectProps extends IDefaultProps {
    options: string[];
    value?: string;
    label?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}
