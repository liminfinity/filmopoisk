import classNames from "classnames";
import { IActorsSliderProps } from "./component.props";
import { useMovie } from "@entities/Movie/hook";
import styles from "./component.module.scss";
import { ArrowButton } from "@shared/ui";
import { ActorCard } from "@entities/Movie/ui";
import { useEffect, useRef, useState } from "react";

export default function ActorsSlider({ className }: IActorsSliderProps) {
	const sliderRef = useRef<HTMLElement>(null);
	const actorsRef = useRef<HTMLUListElement>(null);

	const [hasSlider, setHasSlider] = useState(false);

	useEffect(() => {
		if (!actorsRef.current || !sliderRef.current) return;
		const actorsList = actorsRef.current;
		const slider = sliderRef.current;
		if (actorsList.clientWidth > slider.clientWidth) setHasSlider(true);
	}, []);

	const movie = useMovie();

	if (!movie) return null;
	const { actors } = movie;

	const actorElements = actors.map((actor, idx) => (
		<li key={idx}>
			<ActorCard actor={actor} />
		</li>
	));

	return (
		<section className={classNames(styles.default, className)}>
			<span className={styles.title}>Актёры</span>
			<article ref={sliderRef} className={styles.slider}>
				{hasSlider && (
					<ArrowButton
						direction="left"
						className={classNames(styles.arrow, styles.arrowLeft)}
					/>
				)}
				<ul ref={actorsRef} className={styles.actors}>
					{actorElements}
				</ul>
				{hasSlider && (
					<ArrowButton
						direction="right"
						className={classNames(styles.arrow, styles.arrowRight)}
					/>
				)}
			</article>
		</section>
	);
}
