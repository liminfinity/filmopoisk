import { useState } from "react"
import Dropdown from "./component"
export default function MockProvider() {
    const [value, setValue] = useState<string>()
    return (
      <Dropdown
        label="Рейтинг"
        placeholder="Рейтинг"
        options={["1", "2", "3", "4", "5"]}
        value={value}
        onChange={setValue}
      />
    )
}