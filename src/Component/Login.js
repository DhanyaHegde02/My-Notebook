import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [credentials,setCredentials]=useState({email:"",password:""})
    const  navigate = useNavigate();
    const handleSubmit= async (e)=>{
       e.preventDefault(); 
      //api call
        const response = await fetch(`https://mynotebook02.herokuapp.com/api/auth/login`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
             },
             body: JSON.stringify({email:credentials.email,password:credentials.password}) 
     });
     const json = await response.json()
     console.log(json);
     if (json.success){
        //redirect
        localStorage.setItem('token',json.authToken);
        props.showAlert("Welcome to Your acoount","primary")
        navigate('/')
           
      }
     else{
      props.showAlert("Invalid Details","danger")
     }
}

const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  }
  const handleNew =()=>{
    navigate('/signup')
  }
    
  return (
    <div className=' container mt-2'>
    <div className=" my-3">
    <h3>Create an account to Save Your Data</h3>
  <button  onClick={handleNew} className= " btn btn-primary my-3">New Account</button>
  </div>
     <h3>Login to Access Your Data</h3>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
    <input type="email" className="form-control bg-transparent" id="email" 
    onChange={onChange}

    value={credentials.email}
    name="email"aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password1" className="form-label"><strong>Password</strong></label>
    <input type="password" 
    name="password"
    onChange={onChange}
    value={credentials.password} className="form-control bg-transparent" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary my-2" >Login</button>
  
</form>
    <div className='my-4'>.</div>
 
    </div>
  )
}

export default Login
