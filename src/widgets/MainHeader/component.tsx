import { AuthPanel } from "@features/index";
import { IMainHeaderProps } from "./component.props";
import styles from "./component.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function MainHeader({ className }: IMainHeaderProps) {
	return (
		<header className={classNames(styles.default, className)}>
			<div className={styles.container}>
				<Link className={styles.logo} to={'/'}>
					<h1 className={styles.title}>Фильмопоиск</h1>
				</Link>
				<AuthPanel />
			</div>
		</header>
	);
}
