import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    //mengambil data json dengan useState({})
    const [nama, setNama] = useState({});

    const navigate = useNavigate();

    //get Token

    const token = localStorage.getItem('token');

    const fetchToken = async () => {
        axios
        .defaults
        .headers
        .common['Authorization'] =  `Bearer ${token}`
        await axios
        .post('http://127.0.0.1/api/auth/me')
        .then((response) =>{
            setNama(response.data);
        })
    }
    //membuat middleware ketika tidak ada token
    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
        //panggil function fetchToken
        fetchToken(); 
    },[]);

    //membuat logout handler
    const logoutHandler = async () =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios
        .post('http://127.0.0.1/api/auth/logout')
        .then(()=>{
            localStorage.removeItem('token');
            navigate('/login');
        })
    }



    return (

        <div className="container">
            <div className="d-flex align-items-center" style={{ height: "100vh" }}>
                <div style={{ witdh: "100%" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Home</div>
                                <div className="card-body">
                                    <h5>selamat datang, { nama.name }</h5>
                                    <p>Laravel has wonderful, thorough documentation covering every aspect of the framework. 
                                    Whether you are new to the framework or have previous experience with Laravel, 
                                    we recommend reading all of the documentation from beginning to end. </p>
                                    <button onClick={logoutHandler} type="submit" className="btn btn-danger">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;