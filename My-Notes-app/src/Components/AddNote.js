import React, { useState } from "react";
import "./Note.css";

function AddNote({ handleAddNotes }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit=400;

  const handleChange = (event) => {
    if(characterLimit-event.target.value.length>=0){
      setNoteText(event.target.value);
    }
    
  };
  const handlerSaveClick = () => {
    if (noteText.trim().length>0) {
      handleAddNotes(noteText);
      setNoteText('');  
    }
   
  };
  return (
    <div className="note note-1">
      <textarea
        name=""
        id=""
        cols="8"
        rows="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      >
        {" "}
      </textarea>{" "}
      <div className="add-footer">
        <small> {characterLimit-noteText.length+" "} Remaining </small>{" "}
        <button className="save" onClick={handlerSaveClick}>
          {" "}
          save{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default AddNote;
