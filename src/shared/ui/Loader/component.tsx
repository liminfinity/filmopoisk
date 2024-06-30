import classNames from "classnames";
import { ILoaderProps } from "./component.props";
import styles from "./component.module.scss";
import { SEGMENTS_COUNT } from "./consts";

export default function Loader({ className }: ILoaderProps) {
	return (
		<ul className={classNames(styles.default, className)}>
			{Array.from({ length: SEGMENTS_COUNT }, (_, i) => (
				<li
					key={i}
					className={classNames(
						styles.loaderItem,
						styles[`loaderItem-${i + 1}`],
					)}
				/>
			))}
		</ul>
	);
}
