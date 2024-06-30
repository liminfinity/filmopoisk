import { useState } from "react";
import Score from "./component";

export default function MockProvider() {
	const [score, setScore] = useState<number>();
	const [hoverScore, setHoverScore] = useState<number>();

	return (
		<Score
			length={5}
			value={score}
			onChange={setScore}
			hoverValue={hoverScore}
			onHoverChange={setHoverScore}
		/>
	);
}
