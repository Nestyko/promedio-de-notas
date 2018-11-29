import S from "sanctuary"
import { getNotesIndex, isNextIndex, parseIntE } from "../../handlers/notes.handler";

export const initialState = {
  notes: [],
  textInput: "",
  currentIndex: 0,
  quantityOfNotes: 4,
  error: null,
}

const INPUT_CHANGE = "INPUT_CHANGE"
const QUANTITY_CHANGE = "QUANTITY_CHANGE"
const CHANGE_INDEX = "CHANGE_INDEX"

export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
})

export const indexChange = (payload) => ({
  type: CHANGE_INDEX,
  payload,
})



export default (state = initialState, action) => {
  console.log({state, action})
  switch(action.type){
    case INPUT_CHANGE:{
      const _textInput =  action.payload
      const nextIndex = isNextIndex(state.quantityOfNotes)(_textInput)
      console.log({nextIndex})
      const newCurrentIndex = nextIndex ? state.currentIndex + 1 : state.currentIndex
      const textInput = nextIndex ? "" : _textInput
      const notesIndex = getNotesIndex(textInput)
      const newNotes = S.fromEither({list: [], average: 0})(notesIndex)
      return ({
        ...state,
        notes: state.notes.length <= newCurrentIndex ? state.notes.concat(newNotes) : state.notes.map((note, i) => {
          if(i === newCurrentIndex){
            return newNotes
          }else{
            return note
          }
        }),
        textInput: nextIndex ? "" : textInput,
        error: S.isLeft(notesIndex) ? notesIndex.toString() : null,
        currentIndex: newCurrentIndex
      })
    }
    case QUANTITY_CHANGE:
      const quantity = S.parseInt(action.payload)
      return ({
        ...state,
        quantityOfNotes: S.fromMaybe(5, quantity),
        error: S.Nothing ? `"${action.payload}" is not a valid quantity`: null,
      })
    case CHANGE_INDEX:
      const index = action.payload
      return ({
        ...state,
        currentIndex: index,
        textInput: state.notes[index].list.join(`\n`)
      })
    default: {
      return state
    }
  }
}