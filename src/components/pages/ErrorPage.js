import React from "react";
import {Link} from "react-router-dom";


const Error =()=>{
    return(
        <>
        <div className="container-fluid errorpage">
            <div className="container">
                <h1>Error Page</h1>
                <p>Page not found</p>
                <Link to="/" className="btn btn-danger">Go to Back</Link>
            </div>
        </div>
        </>
    )
}
export default Error;