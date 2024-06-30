import { Loader, PaginationControl, SearchInput } from "@shared/ui";
import { ISearchAndMovieListProps } from "./component.props";
import { useState } from "react";
import { useGetMoviesQuery } from "@entities/Movie/api";
import MovieShortCard from "@features/MovieShortCard";
import classNames from "classnames";
import styles from "./component.module.scss";
import { useDebounce } from "use-debounce";

export default function SearchAndMovieList({
	className,
}: ISearchAndMovieListProps) {
	const [movieTitle, setMovieTitle] = useState("");
	const [debouncedMovieTitle] = useDebounce(movieTitle, 300);
	const [page, setPage] = useState(1);
	const { data, isSuccess, isLoading } = useGetMoviesQuery(
		{
			page,
			limit: 10,
			title: movieTitle,
		},
		{ skip: debouncedMovieTitle !== movieTitle },
	);
	return (
		<section className={classNames(styles.default, className)}>
			<SearchInput
				value={movieTitle}
				onChange={e => setMovieTitle(e.target.value)}
				onClear={() => setMovieTitle("")}
			/>
			{isLoading && <Loader />}
			{isSuccess && !!data.search_result.length && (
				<div>
					<span>Фильмы не найдены</span>
					<span>Измените запрос и попробуйте снова</span>
				</div>
			)}
			{isSuccess && !!data.search_result.length && (
				<div>
					<ul>
						{data.search_result.map(movie => (
							<li key={movie.id}>
								<MovieShortCard movie={movie} />
							</li>
						))}
					</ul>
					<PaginationControl
						currentPage={page}
						totalPages={data.total_pages}
						onPageChange={setPage}
					/>
				</div>
			)}
		</section>
	);
}
