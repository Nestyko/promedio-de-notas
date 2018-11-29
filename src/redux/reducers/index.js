import { combineReducers } from "redux";
import notesReducers from "./notes"

export default combineReducers({
  notes: notesReducers
})