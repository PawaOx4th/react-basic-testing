import clsx from "clsx"
import React, { useRef, useState } from "react"

type ISearchBarProps = {
  onSubmit: (_arg: string) => void
}

function SearchBar({ onSubmit }: ISearchBarProps) {
  // const text = useRef("")
  const textInput = useRef<HTMLInputElement>(null)

  console.log("🔴RENDER :")
  return (
    <div className={clsx("px-10 py-5")}>
      <form
        role={"search"}
        onSubmit={(e) => {
          e.preventDefault()
          textInput.current?.value && onSubmit(textInput.current?.value)
        }}
      >
        <div className="space-y-2">
          <label
            htmlFor="animal-search"
            className="block font-semibold"
          >
            Animal Search
          </label>
          {/* <input
            type="text"
            placeholder="Type here"
            id="animal-search"
            name="animal-search"
            className="input input-bordered input-primary w-full max-w-xs"
            autoFocus
            onChange={(e) => {
              text.current = e.target.value
            }}
          /> */}
          {/*  */}
          <input
            ref={textInput}
            type="text"
            placeholder="Type here..."
            id="animal-search"
            name="animal-search"
            className="input input-bordered input-primary w-full max-w-xs"
            autoFocus
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar

