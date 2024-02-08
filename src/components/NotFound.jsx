import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (

        <main role="main" className="inner cover text-white d-flex flex-wrap align-items-center justify-content-center">
            <center className='w-50 mb-5'>
                <h1 className="cover-heading">404 Page Not Found</h1><br />
                <Link to={"/"}><span href="#" className="btn btn-lg btn-secondary lead">Back to Home</span></Link>
            </center>
        </main>


    )
}
