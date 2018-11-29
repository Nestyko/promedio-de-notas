import notesReducer from "./notes";
import { inputChange } from "./notes";

describe("notes reducer", () => {
  it("should update the notes on text input change", () => {
    const action = inputChange(`14\n15\n16`)
    const initialState = {
      notes: [
        {
          list: [14,15,1],
          average: 10
        }
      ],
      quantityOfNotes: 3,
      textInput: `14\n15\n1`,
      currentIndex: 0,
      error: null,
    }
    expect(notesReducer(initialState, action)).toEqual({
      notes: [
        {
          list: [14,15,16],
          average: 15
        }
      ],
      quantityOfNotes: 3,
      textInput: `14\n15\n16`,
      currentIndex: 0,
      error: null,
    })
  })
  it("should update the notes on the current index only", () => {
    const initialState = {
      notes: [
        {
          list: [14,15,1],
          average: 10
        },
        {
          list: [10,8],
          average: 9
        }
      ],
      textInput: `10\n08`,
      quantityOfNotes: 3,
      currentIndex: 1,
      error: null,
    }
    expect(notesReducer(initialState, inputChange(`10\n08\n1`))).toEqual({
      notes: [
        {
          list: [14,15,1],
          average: 10
        },
        {
          list: [10,8,1],
          average: 6
        }
      ],
      textInput: `10\n08\n1`,
      currentIndex: 1,
      quantityOfNotes: 3,
      error: null,
    })
  })

  it("should change the current indext ", () => {
    const initialState = {
      notes: [
        {
          list: [14,15,1],
          average: 10
        }
      ],
      textInput: `14\n15\n14`,
      quantityOfNotes: 3,
      currentIndex: 0,
      error: null,
    }
    expect(notesReducer(initialState, inputChange(`14\n15\n14\n`))).toEqual({
      notes: [
        {
          list: [14,15,1],
          average: 10
        },{
          list: [],
          average: 0
        }
      ],
      textInput: "",
      quantityOfNotes: 3,
      currentIndex: 1,
      error: null,
    })
  })
})