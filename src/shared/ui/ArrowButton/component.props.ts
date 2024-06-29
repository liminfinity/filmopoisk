import { ButtonHTMLAttributes } from "react";

type Direction = 'left' | 'right'
export interface IArrowButtonProps extends 
ButtonHTMLAttributes<HTMLButtonElement> {
    direction?: Direction
}
