import React from "react"
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

function Note(props){

  const handleDelete = () => {
    props.onDelete(props.id);
  };

    return (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </div>
      );
}

export default Note;