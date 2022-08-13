import React from "react";
import { Link } from "react-router-dom";

function Welcome(){
    return (
        <>
       <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" style={{ width: 40, height: 32 }}></svg>
                    <span className="fs-4">Simple header</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><Link to="/login" className="btn btn-outline-primary me-2">Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="btn btn-primary">Register</Link></li>
                </ul>
            </header>
        </div>

        <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
            </div>
        </section>

        <div className="album py-5 ">
            <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" style={{ width: "100%", height: "225" }} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>


        <div className="container">
                <div className="d-flex align-items-center" style={{ height: "90vh" }}>
                    <div style={{ witdh: "100%" }}>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">Welcome</div>
                                    <div className="card-body">
                                        <h5>kocloxMumet.com</h5>
                                        <p>Laravel has wonderful, thorough documentation covering every aspect of the framework.
                                            Whether you are new to the framework or have previous experience with Laravel,
                                            we recommend reading all of the documentation from beginning to end.</p>

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;