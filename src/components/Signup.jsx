import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Signup() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    let {users, setUsers} = useAuth();

    function signup(e) {

        e.preventDefault();

        const exist = users.find((item) => {
            return email.toLowerCase() == item.email.toLowerCase();
        });

        const user = { name, email, pwd };


        if (!exist) {
            setUsers((prevUsers) => [...prevUsers, user]);
            alert("User Registered Succssfully");
        } else {
            alert("User Already Exist");
        };

        navigate("/login")

    };
    

    return (

        <main role="main" className="inner cover text-white d-flex flex-wrap align-items-center justify-content-center mb-5">
            <div className="form d-flex flex-wrap justify-content-around align-items-center">
                <div className="rounded mb-5 p-5 border border-2 border-light">
                    <h1 className="text-center">SignUp</h1>
                    <form onSubmit={signup}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label" ><span className='text-danger'>* </span>Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" onChange={(e) => { setName(e.target.value) }} required="required" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><span className='text-danger'>* </span>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} required />
                            <div id="emailHelp" className="form-text text-white"> We'll never share your email with anyone else. </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><span className='text-danger'>* </span>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPwd(e.target.value) }} required />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="btn btn-danger w-100">SignUp</button>
                        </div>
                        <label className="form-label">Already have an account?</label>
                        <Link to={"/login"}><span className="btn btn-success w-100">LogIn</span></Link>
                    </form>
                </div>
            </div>
        </main>

    )

}
