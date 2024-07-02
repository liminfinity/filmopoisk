import classNames from "classnames";
import styles from "./component.module.scss";
import { IMoviesNotFoundProps } from "./component.props";

export default function MoviesNotFound({ className }: IMoviesNotFoundProps) {
	return (
		<div className={classNames(styles.default, className)}>
			<span>Фильмы не найдены</span>
			<span className={styles.description}>
				Измените запрос и попробуйте снова
			</span>
		</div>
	);
}
