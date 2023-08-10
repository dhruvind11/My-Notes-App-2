import { useState,useEffect } from 'react';
import './App.css';
import {nanoid} from 'nanoid'
import NoteList from './Components/NoteList';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {
  const [notes,setNotes]=useState([{
     id:nanoid(),
    text:"this is first note",
   date:"25/07/2023"
  },
  {
    id:nanoid(),
   text:"this is second note",
  date:"25/07/2023"
 },
 {
  id:nanoid(),
  text:"this is third note",
  date:"25/07/2023"
},
])

const [searchText,setSearchText]=useState("");
const [darkMode,setDarkMode]=useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('my-note-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'my-note-app-data',
    JSON.stringify(notes)
  );
}, [notes]);

 const addNote=(text)=>{
     const date=new Date();
     const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
     }
     const newNotes=[...notes,newNote];
     setNotes(newNotes);
 };
 const deleteNote=(id)=>{
    const newNotes= notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
 }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
   <div className='container'>
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText} />
      <NoteList notes={
        notes.filter((note)=>note.text.toLowerCase().includes(searchText)
      )} handleAddNote={addNote} handleDeleteNote={deleteNote} />
   </div>
   </div>
  );
}

export default App;
