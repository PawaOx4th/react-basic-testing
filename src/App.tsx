import clsx from "clsx"
import { useState } from "react"
import reactLogo from "./assets/react.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className={clsx(
        "App flex w-full flex-col items-center justify-center border border-blue-100"
      )}
    >
      <h1>Vite + React</h1>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>
      <h1 className="border border-red-400 text-2xl font-semibold ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad
        incidunt ratione.
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
