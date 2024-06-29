import { IActor } from "./actor";

interface IMovie {
    id: string,
    title: string,
    description: string,
    release_year: number,
    poster: string,
    rating: string,
    total_rates_count: string,
    actors: IActor[]
}

type IShortMovie = Omit<IMovie, "actors" | "total_rates_count">

export type {IMovie, IShortMovie}