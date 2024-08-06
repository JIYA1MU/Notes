import React , {useState , useEffect } from "react"
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import axios from 'axios'

function CreateArea(props){

    const [isExpanded , setExpanded] = useState(false);
    const [note , setNote] = useState({
        title : "",
        content : ""
    }); 

    function handleChange(event){
        const {name , value} = event.target;
        setNote(prevNote => {
            return{
                ...prevNote,
                [name] : value
            };
        });
    }

    async function submitNote(event){
        event.preventDefault();
        try{
            props.onAdd(note);
            setNote({
                title : "",
                content : ""
            })
        }
        catch(error){
            console.error("Error Occured!!" , error)
        }
        console.log(note.title , note.content)
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
          <form className="create-note">
            {isExpanded && <input 
            onChange={handleChange}
            name="title" 
            value={note.title} 
            placeholder="Title" 
            /> 
            }

            <textarea 
            onClick={expand}
            onChange={handleChange}
            name="content"
            value = {note.content} 
            placeholder="Take a note..." 
            rows={isExpanded ? 3 :1} 
            />
        <Zoom in={isExpanded}>     
            <Fab onClick = {submitNote}><AddIcon /></Fab>
        </Zoom>  
          </form>
        </div>
    );
}

export default CreateArea;