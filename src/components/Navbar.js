import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar1' >
            <div>
                <ul>
                    <li><Link to='/' className="active">Query Log</Link></li>
                    <li><Link to='/create'>Create Log</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;