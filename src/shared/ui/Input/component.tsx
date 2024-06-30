import classNames from "classnames";
import { IInputProps } from "./component.props";
import styles from "./component.module.scss";
import { nanoid } from "nanoid";

export default function Input({
	label,
	error,
	required,
	className,
	id = nanoid(),
	...props
}: IInputProps) {
	return (
		<div className={classNames(styles.default, className)}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					<span className={styles.labelText}>{label}</span>
					{required && (
						<span className={styles.requiredMarker}>*</span>
					)}
				</label>
			)}
			<input id={id} className={styles.input} {...props} />
			{error && (
				<label
					htmlFor={id}
					className={classNames(styles.label, styles.error)}
				>
					{error}
				</label>
			)}
		</div>
	);
}
