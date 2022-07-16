//import react from "react";
import { useState } from "react";
import NoteContext  from "./noteContext";

 const NoteState =(props)=>{
  const host = "https://mynotebook02.herokuapp.com"
  const notesInitial=[]
  const [notes,setNotes] = useState(notesInitial)

//addNote
const addNote = async (title,description,tag)=>{
  //Api call

  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
      
    },
       body: JSON.stringify({title,description,tag}) 
  });
 // const json =response.json(); 
 const note = await response.json();     
    setNotes(notes.concat(note))
    
  
 }





  //getAllnote
  const getNotes = async ()=>{
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
        
      },
       
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  //delete note
  const deleteNote = async (id)=>{
//Api call

const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  method: 'DELETE', 
  headers: {
    'Content-Type': 'application/json',
    "auth-token":localStorage.getItem('token')
    
  },
      
});
const json = await response.json(); 
console.log(json);


 const newNote=notes.filter((note)=>{ return note._id!==id})
setNotes(newNote);

  }

  //edit note
  const editNote = async (id,title,description,tag)=>{
    //Api call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
        
      },
         body: JSON.stringify({title,description,tag}) 
    });
    const json = await response.json(); 
    console.log(json)
  
    let newNotes=JSON.parse(JSON.stringify(notes))
    //logic for edit
    for(let index =0;index<newNotes.length;index++){
      const element = newNotes[index];
      if(element._id===id){
        
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;
      }
     
    }
    setNotes(newNotes);
  }



    return(
        <NoteContext.Provider value={{notes , setNotes,addNote,getNotes,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
 }
  
 export default NoteState;