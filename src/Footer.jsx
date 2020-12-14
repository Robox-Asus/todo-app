import React from 'react';

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <>
            <footer className="d-flex justify-content-center align-items-end" style={{position:'relative',marginTop:90}}>
                <h1 style={{fontSize:20}}>CopyRight &copy; { year }</h1>
            </footer>
        </>
    );
};

export default Footer;