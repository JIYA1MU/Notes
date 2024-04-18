import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import { useState } from 'react';

function App() {
  const [notes , setNotes] = useState([]);

  function addNote(newNotes){
    setNotes(prevNotes => {
      return [...prevNotes, newNotes]
    }
    )
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem , index) => {
        return index !== id;
      })
    })
  }

    return (
    <>
    <Header />
    <CreateArea onAdd = {addNote}/>
    {
      notes.map((noteItem , index) => {
        return <Note 
        key = {index}
        id = {index}
        title={noteItem.title}
        content={noteItem.content} 
        onDelete={deleteNote} />
      })
    }
    <Footer />
    </>
  )
}

export default App
