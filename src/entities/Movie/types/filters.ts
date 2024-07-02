import { GENRES, YEARS } from "../consts";

type GenresEnglish = keyof typeof GENRES;
type GenresRussian = (typeof GENRES)[GenresEnglish];

type Years = keyof typeof YEARS;
type YearOptions = (typeof YEARS)[Years];

export { YEARS, GENRES };
export type { GenresRussian, GenresEnglish, Years, YearOptions };
