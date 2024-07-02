import { MovieScore } from "@entities/Movie/ui";
import { IMovieShortCardProps } from "./component.props";
import classNames from "classnames";
import styles from "./component.module.scss";
import { useIsAuth } from "@entities/Auth/hook";
import { getClippedText } from "@shared/lib";

interface IMovieInfoSection {
	label: string;
	value: string;
}
export default function MovieShortCard({
	movie,
	className,
}: IMovieShortCardProps) {
	const { description, id, poster, release_year, title, genre } = movie;
	const isAuth = useIsAuth();

	const movieInfoSections: IMovieInfoSection[] = [
		{ label: "Жанр", value: genre },
		{ label: "Год выпуска", value: release_year.toString() },
		{ label: "Описание", value: getClippedText(description, 120) },
	];

	return (
		<article className={classNames(styles.default, className)}>
			<img className={styles.poster} src={poster} alt={title} />
			<main className={styles.main}>
				<div className={styles.header}>
					<h3 className={styles.title}>{title}</h3>
					{isAuth && (
						<MovieScore movieId={id} className={styles.score} />
					)}
				</div>
				<ul className={styles.info}>
					{movieInfoSections.map(({ label, value }, idx) => (
						<li key={idx} className={styles.infoSection}>
							<span className={styles.infoSectionLabel}>
								{label}
							</span>
							<span className={styles.infoSectionValue}>
								{value}
							</span>
						</li>
					))}
				</ul>
			</main>
		</article>
	);
}
