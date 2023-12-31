import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
function NoteList({notes,handleAddNote,handleDeleteNote}) {
  return (
    <div className='note-list'>
      {notes.map((note)=>
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      )}
      <AddNote handleAddNotes={handleAddNote} />
    </div>
  )
}

export default NoteList
