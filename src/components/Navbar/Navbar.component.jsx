import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import noteContext from '../../Context/noteContext';

export default function Navbar() {
    const context = useContext(noteContext);
    const { user } = context;
    const navigate = useNavigate(); 
    const [nav, setNav] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 40) {
            if (!nav)
                setNav(true);
        }
        else {
            if (nav)
                setNav(false);
        }
    }
    useEffect(() => {
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    window.addEventListener('scroll', handleScroll);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/about');
    }
    let color = nav ? "white" : "black";

    return (
        <div className="main-navbar">
            <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor: nav || !localStorage.getItem('token') ? "black" : ""}}>
                <div className="container">
                    <Link className="navbar-brand me-auto" to="/"><h2>iNotes</h2></Link>
                    {localStorage.getItem('token') ?
                        <div className="d-flex justify-content-lg-end position-relative">
                            <div className="user">
                                <i className="fas fa-user-circle fa-2x " style={{ color: color }} ></i>
                                <div className="menu">
                                    <div className="name">{user.name}</div>
                                    <div className="email text-muted">{user.email}</div>
                                    <Link className="logout" onClick={() => handleLogout()} to="/"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
            </nav>
        </div>
    )
}
