import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../api";
import { IMovieParams } from "../types";

function useMovie() {
	const { movieId } = useParams<keyof IMovieParams>();
	const {
		data: movie,
		isError,
		error,
	} = useGetMovieByIdQuery({ id: movieId }, { skip: !movieId });
	if (isError) console.error(error);
	return movie;
}

export { useMovie };
