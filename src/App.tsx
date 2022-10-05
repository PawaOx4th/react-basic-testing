import clsx from "clsx"
import { useState } from "react"
import reactLogo from "./assets/react.svg"

const A = clsx("b")

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button className={clsx("b")}>Button</button>
    </div>
  )
}

export default App
