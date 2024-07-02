import { IMovieFiltersProps } from "./component.props";
import styles from "./component.module.scss";
import classNames from "classnames";
import { Select } from "@shared/ui";
import {
	GenresEnglish,
	GenresRussian,
	YearOptions,
	Years,
} from "@entities/Movie/types";
import { GENRES, YEARS } from "@entities/Movie/consts";
import { useMovieSearchParams } from "@entities/Movie/hook";
import { mapSearchParams } from "@shared/lib";

export default function MovieFilters({ className }: IMovieFiltersProps) {
	const { genre, release_year, title, setMovieSearchParams } =
		useMovieSearchParams();

	const setGenre = (genre: GenresRussian) => {
		const genreEnglish = Object.keys(GENRES).find(
			key => GENRES[key as GenresEnglish] === genre,
		) as GenresEnglish;
		const newSearchParams = mapSearchParams({
			genre: genreEnglish,
			title,
			release_year,
		});
		setMovieSearchParams(newSearchParams);
	};
	const setYear = (year: YearOptions) => {
		const yearParam = Object.keys(YEARS).find(
			key => YEARS[key as Years] === year,
		) as Years;
		const newSearchParams = mapSearchParams({
			genre,
			title,
			release_year: yearParam,
		});
		setMovieSearchParams(newSearchParams);
	};
	return (
		<section className={classNames(styles.default, className)}>
			<span className={styles.title}>Фильтр</span>
			<main className={styles.selectors}>
				<Select
					className={styles.select}
					label="Жанр"
					placeholder="Выберите жанр"
					options={Object.values(GENRES)}
					value={genre ? GENRES[genre] : undefined}
					onChange={setGenre}
				/>
				<Select
					className={styles.select}
					label="Год выпуска"
					placeholder="Выберите год"
					options={Object.values(YEARS)}
					value={release_year ? YEARS[release_year] : undefined}
					onChange={setYear}
				/>
			</main>
		</section>
	);
}
