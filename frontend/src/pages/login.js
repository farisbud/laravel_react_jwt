import  axios  from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){
    //useState untuk mengambil value id (string) di input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //validasi login
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();
    //membuat middleware
    // arrow function useEffect
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            navigate('/home');   
        }
    },[]);

    const loginHandler = async (e) => {
        e.preventDefault();
        const logData = new FormData();
        
        logData.append('email', email);
        logData.append('password',password);

        await axios
        .post('http://127.0.0.1/api/auth/login', logData)
        .then((response)=>{
            localStorage.setItem("token", response.data.access_token);
            navigate('/home');
        }).catch((err) =>{
       //set validasi untuk error jika email dan password tidak ditemukan dan jika mengkosongkan email dan password
            setValidation(err.response.data);
            
        })
    }

    return (

        <div className="container">
            <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                <div style={{ witdh: '100%' }}>
                    <div className="row justify-content-center" >
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                {
                                    validation.error && (
                                    <div className="alert alert-danger" role="alert">
                                        { validation.error }
                                    </div>
                                    )
                                }
                                    <form onSubmit={loginHandler}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="masukan email"/>
                                            {
                                                validation.email && (
                                                    <small className="text-danger">
                                                        { validation.email[0]}
                                                    </small>
                                                )
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            {
                                                validation.password && (
                                                    <small className="text-danger">
                                                        { validation.password[0]}
                                                    </small>
                                                )
                                            }
                                        </div>
                                        <p>Laravel has wonderful, thorough documentation covering every aspect of the framework. 
                                    Whether you are new to the framework or have previous experience with Laravel, 
                                    we recommend reading all of the documentation from beginning to end. </p>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <Link to="/register" className="btn btn-link">Register</Link>
                                        <Link to="/" className="btn btn-link">Home</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;