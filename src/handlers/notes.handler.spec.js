import S from "sanctuary"
import { splitNotes, getNotesIndex, isNextIndex } from "./notes.handler";

describe("splitNotes",  () => {
  it("should split current notes by newline", () => {
    const input = `15\n16\n20 \n18\n`
    expect(splitNotes(input)).toEqual(S.Right([15,16,20,18]))
  })
  it("should return error if invalid notes", () => {
    const input = `15\n16\n20+ \n18`
    expect(S.isLeft(splitNotes(input))).toBe(true)
  })
})

describe("getNotesIndex", () => {
  it("should return the list of notes and the average based on the input", () => {
    const input = `15\n16\n20 \n18`
    expect(getNotesIndex(input)).toEqual(S.Right({
      list: [15,16,20,18],
      average: 17
    }))
  })

})
describe("isNextIndex", () => {
  it("should return true if the list of the notes are gt the base", () => {
    const input = `10\n02\n13`
    const base = 3
    expect(isNextIndex(-1)(input)).toBe(true)
    expect(isNextIndex(base)(input)).toBe(false)
    expect(isNextIndex(base)(input+`\n`)).toBe(true)

  })
})