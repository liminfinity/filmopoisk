import { IModalProps } from "@shared/ui/Modal/component.props";

export interface IAuthModalProps extends Omit<IModalProps, "title" | "children"> {}
