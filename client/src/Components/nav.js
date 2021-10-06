import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <div className = "nav">
    <ul>
        <div >
        <Link to = "/">Home</Link>
        </div>
        <div >
        <Link to = "/jangbi">Jangbi</Link>
        </div>
        <div>
        <Link to = "/communtiy">Communtiy</Link>
        </div>
    </ul>
  </div>;
};

export default Nav;
