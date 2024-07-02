import { PaginationControl } from "@shared/ui";
import { IMoviePaginationControlProps } from "./component.props";
import { useMovieSearchParams } from "@entities/Movie/hook";
import { useGetMoviesQuery } from "@entities/Movie/api";
import { IPaginationControlProps } from "@shared/ui/PaginationControl/component.props";
import { mapSearchParams } from "@shared/lib";

export default function MoviePaginationControl({
	className,
}: IMoviePaginationControlProps) {
	const { page, title, genre, release_year, setMovieSearchParams } =
		useMovieSearchParams();
	const { data: movies, isSuccess } = useGetMoviesQuery({
		page,
		genre,
		title,
		release_year,
	});

	const handleNextPage: IPaginationControlProps["onPageChange"] = newPage => {
		const newSearchParams = mapSearchParams({
			title,
			genre,
			page: newPage,
		});
		setMovieSearchParams(newSearchParams);
	};
	return (
		<>
			{isSuccess && (
				<PaginationControl
					className={className}
					currentPage={page || 1}
					totalPages={movies.total_pages}
					onPageChange={handleNextPage}
				/>
			)}
		</>
	);
}
