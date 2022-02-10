import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return <section className="error-page">
        <h1 className="error-txt">Error!!!</h1>
        <h1>Oops! It looks like you hit the dead end</h1>
        <div>
            <button><Link to='/'>Go back to Home Page</Link></button>
        </div>
    </section>
}

export default Error;