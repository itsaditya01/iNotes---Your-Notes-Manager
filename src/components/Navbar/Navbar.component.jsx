import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import noteContext from '../../Context/noteContext';
import "./Navbar.style.css"

export default function Navbar() {
    const location = useLocation();
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
        <div className="main-navbar" style={{zIndex: 1111, position: "relative"}}>
            <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor: location.pathname === '/' ? "rgb(230 79 224)" : "#ABABC2"}}>
                <div className="container">
                    <Link className="navbar-brand me-auto" style={{color: "rgb(187 184 184)"}} to="/"><h2 style={{color: 'black'}}>iNotes</h2></Link>
                    {location.pathname === '/home' ?
                        <div className="d-flex justify-content-lg-end position-relative">
                            <div className="user">
                                <i className="fas fa-user-circle fa-2x " style={{ color: "#5f5f5f" }} ></i>
                                <div className="menu">
                                    <div className="name">{user.name}</div>
                                    <div className="email text-muted">{user.email}</div>
                                    <Link className="logout" onClick={() => handleLogout()} style={{color: "black"}} to="/"><i className="fas fa-sign-out-alt" style={{color: "black"}}></i> Logout</Link>
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
