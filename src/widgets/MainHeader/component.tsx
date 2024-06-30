import { AuthPanel } from "@features/index";
import { IMainHeaderProps } from "./component.props";
import styles from "./component.module.scss";
import classNames from "classnames";

export default function MainHeader({ className }: IMainHeaderProps) {
	return (
		<header className={classNames(styles.default, className)}>
			<h1 className={styles.title}>Фильмопоиск</h1>
			<AuthPanel />
		</header>
	);
}
