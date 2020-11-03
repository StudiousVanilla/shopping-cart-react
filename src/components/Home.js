import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        // simple message with a Link to the shopping page
        <div className="home-text">
            <p className="sofa-text">Welcome</p>
            <p className="sofa-text sofa-bottom">Home!</p>
            <p>
            Visit our <Link to="/shopping" className="inline-link"><span className="material-icons">store</span></Link>
            to find something perfect for your home
            </p>
        </div>
     );
}
 
export default Home ;