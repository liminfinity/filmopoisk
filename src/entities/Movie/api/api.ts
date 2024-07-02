import { API_URL } from "@app/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	IGetMovieByIdRequest,
	IGetMovieByIdResponse,
	IGetMoviesRequest,
	IGetMoviesResponse,
	ISendMovieRateRequest,
	ISendMovieRateResponse,
} from "../types";

const MovieApi = createApi({
	reducerPath: "movies",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		timeout: 5000,
		responseHandler: res => {
			if (res.ok) return res.json();
			return Promise.reject(res);
		},
	}),
	tagTypes: ["movies"],
	keepUnusedDataFor: 10 * 60, // 10 minutes,
	refetchOnFocus: true,
	refetchOnReconnect: true,
	endpoints: build => ({
		getMovieById: build.query<IGetMovieByIdResponse, IGetMovieByIdRequest>({
			query: ({ id }) => ({
				url: `movie/${id}`,
			}),
			providesTags: (_result, _error, { id }) => [{ type: "movies", id }],
		}),
		getMovies: build.query<
			IGetMoviesResponse,
			Pick<IGetMoviesRequest, "genre" | "title" | "page" | "release_year">
		>({
			query: params => ({
				url: "search",
				params: {
					...params,
					release_year:
						params.release_year === "0"
							? undefined
							: params.release_year,
					genre: params.genre === "0" ? undefined : params.genre,
					title: params.title || " ",
				},
			}),
			providesTags: (_result, _error, params) => [
				{ type: "movies", id: JSON.stringify(params) },
			],
		}),
		sendMovieRate: build.mutation<
			ISendMovieRateResponse,
			ISendMovieRateRequest
		>({
			query: params => ({
				url: "rateMovie",
				method: "POST",
				body: params,
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			invalidatesTags: (_result, _error, params) => [
				{ type: "movies", id: JSON.stringify(params) },
			],
		}),
	}),
});

export const {
	useGetMovieByIdQuery,
	useGetMoviesQuery,
	useSendMovieRateMutation,
} = MovieApi;

export default MovieApi;
