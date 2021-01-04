import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        // simple message with a Link to the shopping page
        <div className="home-text">
            <p className="sofa-text sofa-top">Welcome</p>
            <p className="sofa-text sofa-bottom">Home!</p>
            <p className="store-text">
            Visit our <Link to="/shopping" className="inline-link"><span className="material-icons store-icon">store</span></Link><br></br>
            to find something perfect for your home
            </p>
        </div>
     );
}
 
export default Home ;