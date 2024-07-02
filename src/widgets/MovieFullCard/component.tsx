import { MovieScore } from "@entities/Movie/ui";
import classNames from "classnames";
import styles from "./component.module.scss";
import { useIsAuth } from "@entities/Auth/hook";
import { IMovieFullCardProps } from "./component.props";
import { useState } from "react";
import { useMovie } from "@entities/Movie/hook";

interface IMovieInfoSection {
	label: string;
	value: string;
}
export default function MovieFullCard({ className }: IMovieFullCardProps) {
	const movie = useMovie();
	const isAuth = useIsAuth();
	const [rating, setRating] = useState(movie?.rating ?? "");

	//* Условие для первого получения рейтинга с запроса. После рейтинг обновляется в компоненте MovieScore без запросов в сеть
	if (!rating && movie?.rating) setRating(movie.rating);

	if (!movie) return null;
	const { description, genre, poster, release_year, title, id } = movie;

	const movieInfoSections: IMovieInfoSection[] = [
		{ label: "Жанр", value: genre },
		{ label: "Год выпуска", value: release_year.toString() },
		{ label: "Рейтинг", value: rating },
		{ label: "Описание", value: description },
	];

	return (
		<article className={classNames(styles.default, className)}>
			<img className={styles.poster} src={poster} alt={title} />
			<main className={styles.main}>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					{isAuth && (
						<MovieScore
							movieId={id}
							className={styles.score}
							setNewRate={setRating}
						/>
					)}
				</div>
				<ul className={styles.info}>
					{movieInfoSections.map(({ label, value }, idx) => (
						<li
							key={idx}
							className={classNames(styles.infoSection, {
								[styles.infoSectionDescription]:
									label === "Описание",
							})}
						>
							<span className={styles.infoSectionLabel}>
								{label}:
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
