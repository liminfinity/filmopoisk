import { useState } from "react"
import Dropdown from "./component"
import { ISelectProps } from "./component.props"
export default function MockProvider() {
    const [value, setValue] = useState<string>()

    const onChange: ISelectProps["onChange"] = (newValue) => setValue(newValue)
     
    return (
      <Dropdown
        label="Рейтинг"
        placeholder="Рейтинг"
        options={["1", "2", "3", "4", "5"]}
        value={value}
        onChange={onChange}
      />
    )
}