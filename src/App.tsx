import clsx from "clsx"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import SearchBar from "./components/SearchBar"

function App() {
  const onSearchAnimal = (_arg: string) => {
    console.log("🧊 ARG :", _arg)
  }
  return (
    <div>
      <SearchBar onSubmit={onSearchAnimal} />
    </div>
  )
}

export default App
