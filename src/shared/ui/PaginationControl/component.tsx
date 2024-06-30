import classNames from "classnames";
import { IPaginationControlProps } from "./component.props";
import styles from "./component.module.scss";
import ArrowButton from "../ArrowButton";

export default function PaginationControl({
	currentPage,
	totalPages,
	onPageChange,
	className,
}: IPaginationControlProps) {
	const goNextPage = () => onPageChange(currentPage + 1);
	const goPrevPage = () => onPageChange(currentPage - 1);

	return (
		<div className={classNames(styles.default, className)}>
			<ArrowButton
				direction="left"
				disabled={currentPage === 1}
				onClick={goPrevPage}
			/>
			<span>
				{currentPage}/{totalPages}
			</span>
			<ArrowButton
				direction="right"
				disabled={currentPage === totalPages}
				onClick={goNextPage}
			/>
		</div>
	);
}
