import { MovieFilters, SearchAndMovieList } from "@widgets/index";
import styles from "./component.module.scss";
export default function MainPage() {
	return (
		<main className={styles.default}>
			<MovieFilters className={styles.filters} />
			<SearchAndMovieList className={styles.list} />
		</main>
	);
}
