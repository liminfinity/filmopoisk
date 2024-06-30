import { IShortMovie } from "@entities/Movie/types";
import { IDefaultProps } from "@shared/types";

export interface IMovieShortCardProps extends IDefaultProps {
	movie: IShortMovie;
}
