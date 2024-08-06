import './App.css'
import Header from "./Header"
import Footer from "./Footer"
import CreateArea from "./CreateArea"
import Note from "./Note"
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [notes , setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try{
        const response = await axios.get(`http://localhost:3000/notes`);
        setNotes(response.data)
      }
      catch(error){
        console.error("Error occured!! Can't fetch data" , error);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async(newNote) => {
    try {
      const response = await axios.post('http://localhost:3000/notes', newNote);
      setNotes(prevNotes => [...prevNotes, response.data]);
    }
    catch(error){
      console.error("Error in adding the note", error);
    }
  }
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    } catch (error) {
      console.error("There was an error deleting the note!", error);
    }
  };
  

    return (
    <div className='parent'>
    <Header />
    <CreateArea onAdd = {addNote}/>
    {notes.map(noteItem => (
        <Note
          key={noteItem._id}  
          id={noteItem._id}  
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    <Footer />
    </div>
  )
}

export default App
