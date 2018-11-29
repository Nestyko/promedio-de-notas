import React from "react"
import { NotesInput } from "./NotesInput";
import { connect } from "react-redux";
import { inputChange, indexChange } from "../redux/reducers/notes";
import { NotesTable } from "./NotesTable";

class _Main extends React.Component{
  render(){
    const {notes, currentIndex, quantityOfNotes, textInput, textChange, selectIndex} = this.props
    return(
      <div style={{display: "inline-flex"}}>
        <NotesInput value={textInput} onChange={textChange} ></NotesInput>
        <NotesTable notes={notes} onSelect={selectIndex} ></NotesTable>
      </div>
    )
  }
}

const mapStateToProps = ({notes}) => notes

const mapActionsToProps = (dispatch) => ({
  textChange: ({target: {value}}) => dispatch(inputChange(value)),
  selectIndex: (i) => () => dispatch(indexChange(i)) 
})

export const Main = connect(mapStateToProps, mapActionsToProps)(_Main)