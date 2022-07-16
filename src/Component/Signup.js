import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials,setCredentials]=useState({ name:"",email:"",password:"",cpassword:""})
    const  navigate = useNavigate();
    const handleSubmit= async (e)=>{
       e.preventDefault(); 
       const {name,email,password} =credentials;
      //api call
        const response = await fetch(`https://mynotebook02.herokuapp.com/api/auth/createuser`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
             },
             body: JSON.stringify({name,email,password}) 
     });
     const json = await response.json()
     console.log(json);
     if (json.success){
        //redirect
        localStorage.setItem('token',json.authToken);
        navigate('/')
        props.showAlert("Account created successfully","primary")
     }
     else{
         props.showAlert("Invalid Credentials","danger")
     }
}
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    
      }
    
  return (
    <div className='container mt-2'>
    <h3 className='container'>Create Your Account </h3>
   <form onSubmit={handleSubmit} >
   <div className="container">
    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Name</strong></label>
    <input type="text" className="form-control bg-transparent" name="name" onChange={onChange}  id="name"  aria-describedby="emailHelp"/>
  </div>
  <div className="container">
    <label htmlFor="email" className="form-label"><strong>Email</strong></label>
    <input type="email" className="form-control bg-transparent" onChange={onChange} name="email" id="email" aria-describedby="emailHelp"/>
  </div>
  
  <div className=" container mb-3">
    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
    <input type="password" className="form-control bg-transparent" name="password" onChange={onChange} minLength= {5} required id="password"/>
  </div>
  <div className=" container mb-3">
    <label htmlFor="cpassword" className="form-label "> <strong>Confirm Password</strong></label>
    <input type="password" className="form-control bg-transparent" name="cpassword" onChange={onChange} minLength= {5} required  id="cpassword"/>
  </div>
  
  <button type="submit" className=" btn btn-primary mx-2"><strong>Signup</strong></button>
</form>
    </div>
  )
}

export default Signup
