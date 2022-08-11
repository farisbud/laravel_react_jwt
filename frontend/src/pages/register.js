import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    //validasi
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();
    //membuat middleware
    // arrow function useEffect
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            navigate('/home');   
        }
    },[]);

        const registerHandler = async (e) => {
            e.preventDefault();

            const formData = new FormData();
            //formData.append('name', name di pasangkan dengan variabel cons[..] diatas);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password',password);
            formData.append('password_confirmation', passwordConfirmation);

            await axios
            .post('http://127.0.0.1/api/auth/register', formData)
            .then(()=>{
                navigate('/login');
            }).catch((err)=>{
                //err.response.data.errors ini dari backend laravel di controller authlogincontroller di validation register
                setValidation(err.response.data.errors);
            })

        }
    return (

        <div className="container">
            <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                <div style={{ witdh: '100%' }}>
                    <div className="row justify-content-center" >
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">Register</div>
                                <div className="card-body">
                                    <form onSubmit={registerHandler}>
                                        <div className="mb-3">
                                            <label htmlFor="nama lengkap" className="form-label">Nama Lengkap</label>
                                            {/* value={name} mengambil dari const [...] = useState(""); */}
                                            <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="masukan nama lengkap"/>
                                            
                                            {/* validasi pakai react */}

                                            {
                                                // validation.name mengambil dari const [...] = useState("");

                                                validation.name && (
                                                    <small className="text-danger">
                                                        {/* validation.name[0] ini mengambil dari validasi backend laravel  */}

                                                        { validation.name[0]}
                                                    </small>
                                                )
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="masukan email" />
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
                                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                                            {
                                                validation.password && (
                                                    <small className="text-danger">
                                                        { validation.password[0]}
                                                    </small>
                                                )
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="konfirmasi password" className="form-label">Password confirmation</label>
                                            <input type="password" className="form-control" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;