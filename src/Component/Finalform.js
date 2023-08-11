import React, { useState } from 'react'
import Contact from './Contact'
import Signup from './Signup'

const Finalform = () => {
    const[formsubmit,setformsubmit] = useState(false);
    const submitform = () => {
        setformsubmit(true);
    }
  return (
    <div>
        {
            !formsubmit ? <Contact submitform={submitform}/> : <Signup/>
        }
      
    </div>
  )
}

export default Finalform
