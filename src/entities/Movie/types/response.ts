import { IMovie, IShortMovie } from "./movie";

interface IGetMoviesResponse {
	search_result: IShortMovie[];
	total_pages: number;
}

interface IGetMovieByIdResponse extends IMovie {}

interface ISendMovieRateResponse {
	movieId: string;
	newAverageRate: string;
	newTotalRatesCount: number;
}

export type {
	IGetMoviesResponse,
	IGetMovieByIdResponse,
	ISendMovieRateResponse,
};
