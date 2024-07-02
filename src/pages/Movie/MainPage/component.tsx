import { ActorsSlider, MovieFullCard } from "@widgets/index";
import styles from "./component.module.scss";
export default function MainPage() {
	return (
		<main className={styles.default}>
			<MovieFullCard />
			<ActorsSlider />
		</main>
	);
}
