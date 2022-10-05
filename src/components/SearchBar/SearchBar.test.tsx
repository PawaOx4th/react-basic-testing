import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import SearchBar from "."
import userEvent from "@testing-library/user-event"

test("should type and get correct text on submit", async () => {
  const DATA_PASSING = "lion"

  const onSubmit = (text: string) => {
    expect(text).toBe(DATA_PASSING)
  }

  render(<SearchBar onSubmit={onSubmit} />)
  await userEvent.keyboard(`${DATA_PASSING}x{backspace}{enter}`)
})

