import React, { useEffect, useState } from 'react'
import Validation from './Validation';

const Contact = ({submitform}) => {
  const[data,setdata]= useState({name:"",email:"",message:""})
 
  const handlechange = (e) =>{
    setdata({
      ...data,[e.target.name]:e.target.value,
    })
  }
  const[dataiscorrect,setdataiscorrect] = useState(false);
  const[errors,seterrors] = useState({});


  const handlesubmit = (e) => {
    e.preventDefault();
    seterrors(Validation(data))
    setdataiscorrect(true);
  }
  useEffect(() =>{
    if(Object.keys(errors).length === 0 && dataiscorrect){
      submitform(true)
    }
  },[errors])
  
  return (
    <div>
      <section className='contact'>
        <div className='conatiner'>
          <div className='row'>
            <div className='col-12 text-center py-4 mb-5'>
              <h1>Contact</h1>
              <hr />
            </div>
          </div>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-8 mb-5'>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputname" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='name' value={data.fullname} onChange={handlechange} />
                    {errors.name && <p className='error'>{errors.name}</p>}
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={handlechange}/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    {errors.email && <p className='error'>{errors.email}</p>}
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"name='message' value={data.message} onChange={handlechange}></textarea>
                    {errors.message && <p className='error'>{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  )
}

export default Contact
