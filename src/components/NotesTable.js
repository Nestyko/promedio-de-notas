import React from "react"
import { notEqual } from "assert";

export const NotesTable = ({notes = [], onSelect}) => (
  <div>
    <table className="simple-table">
      {notes.map((note, i) => <NotesRow key={i} onClick={onSelect(i)} index={i} {...note} ></NotesRow>)}
    </table>
  </div>
)

export const NotesRow = ({index, list, average, onClick}) => (
  <tr tabIndex={1} onClick={onClick}>
    <td> <small>{index+1}</small> </td>
    {list.map((note, i) => <td key={i} >{note}</td>)}
    <td className="highlight">{average}</td>
  </tr>
)