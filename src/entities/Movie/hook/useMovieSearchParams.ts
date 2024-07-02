import { useSearchParams } from "react-router-dom";
import { GenresEnglish, Years } from "../types";

function useMovieSearchParams() {
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get("title") ?? undefined;

	const pageParam = searchParams.get("page") ?? undefined;
	const page = pageParam ? parseInt(pageParam) : undefined;

	const genre = (searchParams.get("genre") ?? undefined) as
		| GenresEnglish
		| undefined;

	const release_year = (searchParams.get("release_year") ?? undefined) as
		| Years
		| undefined;

	return {
		title,
		page,
		genre,
		release_year,
		setMovieSearchParams: setSearchParams,
	};
}

export { useMovieSearchParams };
