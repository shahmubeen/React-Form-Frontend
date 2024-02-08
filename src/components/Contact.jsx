import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (

        <main role="main" className="inner cover text-white d-flex flex-wrap align-items-center justify-content-center">
            <center className='w-50 mb-5'>
                <h1 className="cover-heading">Contact page</h1><br />
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, omnis doloribus culpa quasi, itaque commodi vero voluptatum aliquid repellendus nemo cumque modi quae veritatis odit, corporis tempora! Tempore, iste quasi!</p><br />
                <Link to={"/signup"}><span href="#" className="btn btn-lg btn-secondary lead">Join Now</span></Link>
            </center>
        </main>

    )
}
