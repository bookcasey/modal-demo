import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcome to the homepage!</h1>
            <nav>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Home;