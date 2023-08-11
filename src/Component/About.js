import React from 'react'


const About = () => {
    return (
        <div>
            <section className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center py-4'>
                            <h1>About</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSMHz6khkR-qfn1oDDYBodAHmciwNEzXQBJ8pXbRELZv0WA4V&s"alt='web' height='500px' weight='300px'></img>
                        </div>
                        <div className='col-md-6 my-5'>
                            <h1 className='display-5 mb-4'> Harish Rajendran</h1>
                            <p className='lead mb-5'>Highly accomplished and user-focused Front-end Developer adept in collaborating with UX and design teams to plan the technical writing and execution of functional specifications for websites and applications. 
                            Experienced in building multi-platform websites using Responsive Web Design/RWD. </p>
                            <div class="progress my-4"style={{height: "30px"}}>
                                <div class="progress-bar  bg-success" 
                                role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML5</div>
                                <span className='pro'>70%</span>
                            </div>
                            <div class="progress my-4" style={{height: "30px"}}>
                                <div class="progress-bar  bg-info" 
                                role="progressbar" style={{ width:"70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">CSS</div>
                                <span className='pro'>60%</span>
                            </div>
                            <div class="progress my-4"  style={{height: "30px"}}>
                                <div class="progress-bar  bg-warning" 
                                role="progressbar" style={{ width:"60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">JAVASCRPIT</div>
                                <span className='pro'>50%</span>
                            </div>
                            <div class="progress my-4" style={{height: "30px"}}>
                                <div class="progress-bar bg-danger" 
                                role="progressbar" style={{ width:"50%" }}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">REACTJS</div>
                                <span className='pro'>40%</span>
                            </div>
                            <div class="progress my-4" style={{height: "30px"}}>
                                <div class="progress-bar" 
                                role="progressbar" style={{ width:"40%" }}aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP</div>
                                <span className='pro'>40%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default About
