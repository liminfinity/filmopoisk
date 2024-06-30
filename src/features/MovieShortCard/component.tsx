import { MovieScore } from "@entities/Movie/ui";
import { IMovieShortCardProps } from "./component.props";
import classNames from "classnames";
import styles from "./component.module.scss";
import { useIsAuth } from "@entities/Auth/hook";

export default function MovieShortCard({
	movie,
	className,
}: IMovieShortCardProps) {
	const { description, id, poster, release_year, title, genre } = movie;
	const isAuth = useIsAuth();

	return (
		<article className={classNames(styles.default, className)}>
			<img className={styles.poster} src={poster} alt={title} />
			<main className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.info}>
					<div className={styles.infoSection}>
						<span className={styles.infoSectionLabel}>Жанр: </span>
						<span className={styles.infoSectionValue}>{genre}</span>
					</div>
					<div className={styles.infoSection}>
						<span className={styles.infoSectionLabel}>
							Год выпуска:{" "}
						</span>
						<span className={styles.infoSectionValue}>
							{release_year}
						</span>
					</div>
					<div className={styles.infoSection}>
						<span className={styles.infoSectionLabel}>
							Описание:{" "}
						</span>
						<span className={styles.infoSectionValue}>
							{description}
						</span>
					</div>
				</div>
			</main>
			{isAuth && <MovieScore movieId={id} className={styles.score} />}
		</article>
	);
}
