import { IActorCardProps } from "./component.props";
import styles from "./component.module.scss";
import classNames from "classnames";

export default function ActorCard({
	actor: { name, photo },
	className,
}: IActorCardProps) {
	return (
		<article className={classNames(styles.default, className)}>
			<img className={styles.photo} src={photo} alt={name} />
			<span className={styles.name}>{name}</span>
		</article>
	);
}
