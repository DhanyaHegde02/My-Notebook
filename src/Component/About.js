import React from 'react'

function About() {
  return (<><div className='bg-transparent' style={{backgroundColor:'#ffd9b3'}}>
    <h2 className='container mx-1 my-4'>My Notebook </h2>
    <div className="accordion accordion-flush bg-transparent" id="accordionFlushExample">
  <div className="accordion-item bg-transparent ">
    <h2 className="accordion-header bg-transparent" id="flush-headingOne">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <strong><h5>Ensures Security</h5></strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">My Notebook application ensures security for the user's data. NO third party can access the data. Only after proper user authentication process though email and password ,the data can be accessed by the user</div>
    </div>
  </div>
  <div className="accordion-item bg-transparent my-5">
    <h2 className="accordion-header bg-transparent" id="flush-headingTwo">
      <button className="accordion-button collapsed bg-transparent " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <h5>User-Friendly</h5>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">My Notebook is a user-friendly application in which user can easily store the text data ,access the  text data, modify the text data anytime without any hurdles, with proper authentication. </div>
    </div>
  </div>
  <div className="accordion-item bg-transparent my-5">
    <h2 className="accordion-header bg-transparent" id="flush-headingThree">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       <h5>Free of Cost </h5>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">My Notebook is an absolute free application with ensured security for data.Anyone can utilize this application to save the Data </div>
      
    </div>
  </div>
</div>
</div>
<div>
      <p>.</p>
      </div>
</>
  )
}

export default About
