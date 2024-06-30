import { Score } from "@shared/ui";
import { IMovieScoreProps } from "./component.props";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { SCORE_DEBOUCE_TIME } from "./consts";
import { useSendMovieRateMutation } from "@entities/Movie/api";

export default function MovieScore({
	movieId,
	setNewRate,
	className,
}: IMovieScoreProps) {
	const [score, setScore] = useState<number>();
	const [hoverScore, setHoverScore] = useState<number>();
	const [debouncedScore] = useDebounce(score, SCORE_DEBOUCE_TIME);
	const [sendMovieRate, { data }] = useSendMovieRateMutation();

	if (data) setNewRate && setNewRate(+data.newAverageRate);

	useEffect(() => {
		if (score === debouncedScore && score) {
			sendMovieRate({
				movieId,
				user_rate: score,
			});
		}
	}, [score, debouncedScore, movieId, sendMovieRate]);

	return (
		<Score
			length={5}
			value={score}
			onChange={setScore}
			hoverValue={hoverScore}
			onHoverChange={setHoverScore}
			className={className}
		/>
	);
}
