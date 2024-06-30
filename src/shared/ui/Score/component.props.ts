import { IDefaultProps } from "@shared/types";

export interface IScoreProps extends IDefaultProps {
	length?: number;
	value?: number;
	hoverValue?: number;
	onHoverChange?: (value?: number) => void;
	onChange?: (value: number) => void;
}
