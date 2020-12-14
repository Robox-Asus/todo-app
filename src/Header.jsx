import React from 'react';
import Google from  './Google.svg';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light shadow-sm p-3 mb-5 bg-warning rounded ">
                <a className="navbar-brand" href="https://www.google.co.in">
                    <img src={Google} width="30" height="40" className="d-inline-block align-top" alt="" loading="lazy" />
                    <span className="pl-2 text-white text-monospace" style={{fontWeight:'bold',fontSize:25}}>Robox-Asus</span>
                </a>
            </nav>
        </>
    );
};

export default Header;