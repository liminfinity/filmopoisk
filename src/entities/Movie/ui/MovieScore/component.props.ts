import { IDefaultProps } from "@shared/types";

export interface IMovieScoreProps extends IDefaultProps {
	movieId: string;
	setNewRate?: (newRate: number) => void;
}
