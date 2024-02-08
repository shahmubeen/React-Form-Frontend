import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useAuth from "../hooks/useAuth"

export default function Home() {

    const { backendAPI } = useAuth();
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(backendAPI).
        then((res) => { setData(res.data) }).
        catch((err) => { console.log(err) })
    }, [])


    return (
        <main role="main" className="inner cover text-white d-flex flex-wrap align-items-center justify-content-center">
            <center className='w-50 mb-5'>
                <h1 className="cover-heading">Home page</h1><br />
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, omnis doloribus culpa quasi, itaque commodi vero voluptatum aliquid repellendus nemo cumque modi quae veritatis odit, corporis tempora! Tempore, iste quasi!</p><br />
                <Link to={"/signup"}><span className="btn btn-lg btn-secondary lead">Join Now</span></Link>
                <h1>{data}</h1>
            </center>
        </main>
    )
}
