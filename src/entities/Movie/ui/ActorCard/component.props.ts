import { IActor } from "@entities/Movie/types";
import { IDefaultProps } from "@shared/types";

export interface IActorCardProps extends IDefaultProps {
	actor: IActor;
}
