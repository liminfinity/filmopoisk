import { IDefaultProps } from "@shared/types";

export interface IPaginationControlProps extends IDefaultProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
