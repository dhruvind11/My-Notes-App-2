import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import "./Note.css"

function Note({id,text,date,handleDeleteNote}) {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='footer'></div>
      <span>{date}<MdDeleteForever className='icon' size='20px' onClick={()=>handleDeleteNote(id)}/></span> 
    </div>

  )
}

export default Note
