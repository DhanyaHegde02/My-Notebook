import React, { useContext, useRef ,useState} from "react";
import { useEffect } from "react";
import noteContext from "../Context/notes/noteContext.js";
import AddNote from "./AddNote.js";
import NoteItem from "./NoteItem.js";
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
  const context = useContext(noteContext);
  let  navigate = useNavigate();
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
    getNotes();
  }
    else{
    navigate("/login")
     
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription: currentNote.description, etag:currentNote.tag})
    
  }
  const handleClick = (e) => {
    console.log("note updated",note)
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Data Updated successfully","primary");

   // addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });

  }
  
  return (
    <>
      <AddNote  showAlert={props.showAlert}/>
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Edit Data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"> <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {" "}
              Title
            </label>
            <input
              type="text"
              className="form-control bg-transparent"
              id="etitle"
              name="etitle"
              value={note.etitle}
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control bg-transparent"
              id="edescription"
              name="edescription"
              value={note.edescription}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control bg-transparent"
              id="etag"
              name="etag"
              value={note.etag}
              onChange={onChange}
              minLength={3}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}

          >
            Submit
          </button>
        </form></div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length <5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>
                Update Data
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container row my-3 ">
          <h4>Your Data Collections</h4>
          <div className="">
          {notes.length===0 && 'No Data'}
          </div>
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;