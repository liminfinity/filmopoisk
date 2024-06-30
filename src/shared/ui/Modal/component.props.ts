import { IDefaultProps, RequiredCertain } from "@shared/types";

export interface IModalProps
	extends RequiredCertain<IDefaultProps, "children"> {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
}
