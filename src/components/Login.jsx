import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {

    const navigate = useNavigate();
    const {auth, setAuth, users, setUsers} = useAuth();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPwd, setLoginPwd] = useState("");


    function login(e) {
        e.preventDefault();

        const exist = users.find((item) => {
            return loginEmail.toLowerCase() == item.email.toLowerCase() && loginPwd === item.pwd;
        });

        if (exist) {
            alert("Login Successful");
            setAuth(true);
            navigate("/")
        } else {
            alert("Invalid Email or Password");
        }
    }

    

    return (
        <main role="main" className="inner cover text-white d-flex flex-wrap align-items-center justify-content-center mb-5">
            <div className="form d-flex flex-wrap justify-content-around align-items-center">
                <div className="rounded mb-5 p-5 border border-2 border-light">
                    <h1 className="text-center">LogIn</h1>
                    <form onSubmit={login}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e) => { setLoginEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" onChange={(e) => { setLoginPwd(e.target.value) }} />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="btn btn-success w-100">LogIn</button>
                        </div>
                        <label className="form-label">Doesn't have an account?</label>
                        <Link to={"/signup"}><span className="btn btn-danger w-100">SignUp</span></Link>
                    </form>
                </div>
            </div>
        </main>
    )
}
