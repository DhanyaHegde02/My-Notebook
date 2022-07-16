import React, { useContext } from "react";
import { useState } from "react";
import noteContext from "../Context/notes/noteContext.js";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "",
    description: "",
    tag: " "})
    props.showAlert("Data Addded successfully","primary");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-2">
        <h4>Add Data</h4>
        <form className="my-2">
          <div className="mb-2">
            <label htmlFor="title" className="form-label">
              {" "}
              <strong>Title</strong>
            </label>
            <input
              type="text"
              className="form-control bg-transparent"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="form-label">
              <strong>Description</strong>
            </label>
            <input
              type="text"
              className="form-control bg-transparent"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              <strong>Tag</strong>
            </label>
            <input
              type="text"
              className="form-control bg-transparent"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              minLength={3}
              required
            />
          </div>

          <button
          disabled={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
