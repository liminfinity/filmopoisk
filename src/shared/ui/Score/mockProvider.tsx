import { useState } from "react"
import Score from "./component"
import { IScoreProps } from "./component.props"

export default function MockProvider() {
    const [score, setScore] = useState<number>()
    const [hoverScore, setHoverScore] = useState<number>()
    const onScoreChange: IScoreProps["onChange"] = (newScore) => setScore(newScore)
    const onHoverScoreChange: IScoreProps["onHoverChange"] = (newScore) => setHoverScore(newScore)
        
  return (
    <Score
      length={5}
      value={score}
      onChange={onScoreChange}
      hoverValue={hoverScore}
      onHoverChange={onHoverScoreChange}
    />
  )
}