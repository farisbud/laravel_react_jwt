import React from "react";

function Login(){
    return (

        <div className="container">
            <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                <div style={{ witdh: '100%' }}>
                    <div className="row justify-content-center" >
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="masukan email"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password"/>
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
    )
}

export default Login;