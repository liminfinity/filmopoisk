import { useState } from "react"
import "./styles/globals.scss"
import { Score } from "@shared/ui"
import { IScoreProps } from "@shared/ui/Score/component.props"

function App() {
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

export default App
