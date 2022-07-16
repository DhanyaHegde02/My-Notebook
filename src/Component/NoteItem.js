import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext.js";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  //const {notes } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <i
            className="fa-solid fa-pen-to-square "
            onClick={() => {
              updateNote(note);
            }}
          ></i>
          <i
            className="fa-solid fa-trash-can mx-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Data Deleted successfully","primary")
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
