import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Service from './Service'
// import img1 from '../Assest/dev.jpg'
import Finalform from './Finalform'

const Home = () => {
  return (
    <div>
        <section className='container my-5 py-4'>
            <div className='row'>
                <div className='col-md-5 mt-5'>
                    <h1 className='display-5 mb-4'> I'am Web Developer<br/>Harish Rajendran</h1>
                    <p className='lead mb-4'>
                    A Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. Proven experience developing consumer-focused websites using HTML, CSS, JavaScript and ReactJS. 
                    Good knowledge of the best practices for web design, user experience, and speed.
                    </p>
                    <Link className="btn btn-outline-primary me-4" to="/contact" role="button">Get Started</Link>
                    <Link className="btn btn-primary" to="/about" role="button">More About Me</Link>
                </div>
                <div className='col-md-7 d-flex justify-content-center align-items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0M5MgcI6G0q4TvbWVnkUvxI9i9V0F2wW0J79CyJMYtAOHGoAR&s"alt="harish" height="300px" width="300px"/>
                </div>

            </div>
        </section>
        <About/>
        <Service/>
        <Finalform/>
      
    </div>
  )
}

export default Home
