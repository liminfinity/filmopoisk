import { GenresEnglish, Years } from "./filters";
import { IMovie } from "./movie";

type Order = "asc" | "desc";
type SortBy = Pick<IMovie, "release_year" | "title" | "rating">;

interface IGetMoviesRequest {
	page?: number;
	limit?: number;
	title?: string;
	genre?: GenresEnglish;
	release_year?: Years;
	sortBy?: SortBy;
	order?: Order;
}

interface IGetMovieByIdRequest {
	id?: string;
}

interface ISendMovieRateRequest {
	movieId: string;
	user_rate: number;
}

export type { IGetMoviesRequest, IGetMovieByIdRequest, ISendMovieRateRequest };
