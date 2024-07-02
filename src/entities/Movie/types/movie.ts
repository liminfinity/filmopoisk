import { IActor } from "./actor";
import { GenresRussian } from "./filters";

interface IMovie {
	id: string;
	title: string;
	description: string;
	release_year: number;
	poster: string;
	rating: string;
	genre: GenresRussian;
	actors: IActor[];
}

type IShortMovie = Omit<IMovie, "actors" | "rating">;

export type { IMovie, IShortMovie };
