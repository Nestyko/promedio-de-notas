import React from "react"

export const NotesInput = ({onChange, value}) => (
  <div>
    <textarea onChange={onChange} rows={10} value={value}>
    </textarea>
  </div>
)