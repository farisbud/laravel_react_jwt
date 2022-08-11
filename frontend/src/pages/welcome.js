import React from "react";

function Welcome(){
    return (

        <div className="container">
            <div className="d-flex align-items-center" style={{ height: "100vh" }}>
                <div style={{ witdh: "100%" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Welcome</div>
                                <div className="card-body">
                                    <h5>kocloxMumet.com</h5>
                                    <p>Laravel has wonderful, thorough documentation covering every aspect of the framework. 
                                    Whether you are new to the framework or have previous experience with Laravel, 
                                    we recommend reading all of the documentation from beginning to end. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Welcome;