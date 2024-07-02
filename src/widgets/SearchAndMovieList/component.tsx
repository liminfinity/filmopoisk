import {
	MoviePaginationControl,
	MovieSearchInput,
	MoviesNotFound,
} from "@entities/Movie/ui";
import { ISearchAndMovieListProps } from "./component.props";
import { useMovieSearchParams } from "@entities/Movie/hook";
import { useGetMoviesQuery } from "@entities/Movie/api";
import { MovieShortCard } from "@features/index";
import classNames from "classnames";
import styles from "./component.module.scss";
import { Loader } from "@shared/ui";
import { Link } from "react-router-dom";

export default function ISearchAndMovieList({
	className,
}: ISearchAndMovieListProps) {
	const { genre, page, title, release_year } = useMovieSearchParams();
	const {
		data: movies,
		isSuccess,
		isFetching,
	} = useGetMoviesQuery({
		page,
		genre,
		title,
		release_year,
	});

	return (
		<section className={classNames(styles.default, className)}>
			<MovieSearchInput />
			<main className={styles.main}>
				{isSuccess && !isFetching && !!movies.total_pages && (
					<>
						<ul className={styles.movies}>
							{movies.search_result.map(movie => (
								<li className={styles.movieItem} key={movie.id}>
									<Link
										className={styles.link}
										to={`/movies/${movie.id}`}
									>
										<MovieShortCard movie={movie} />
									</Link>
								</li>
							))}
						</ul>
						<MoviePaginationControl className={styles.pagination} />
					</>
				)}
				{isSuccess && !isFetching && !movies.total_pages && (
					<MoviesNotFound className={styles.notFound} />
				)}
				{isFetching && <Loader className={styles.loader} />}
			</main>
		</section>
	);
}
