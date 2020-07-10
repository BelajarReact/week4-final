import React from "react";

import Logo from "../logo.svg"
const Footer = () =>{

    return(
        <footer className="footer">
            <a href="https://fb.me/hadie.danker" className="myLogo white" target="_blank"><img src={Logo} height="30px" width="30px" alt=""/></a>
            <p style={{marginTop:"20px"}}><i className="fa fa-user-circle-o"></i> Muhammad Syamsul Hadi</p>
            <p>Ini adalah final project dari kelas React FrontEnd by SanberCode.com</p>

            <p>Follo our social Media</p>

            <div className="social-media d-flex align-items-center justify-content-center">
                <a href="https://fb.com/hadie.danker" target="_blank"><i className="fa fa-facebook-official"></i></a>
                <a href="https://fb.com/hadie.danker" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://fb.com/hadie.danker" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https://fb.com/hadie.danker" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="https://fb.com/hadie.danker" target="_blank"><i className="fa fa-youtube-play"></i></a>
            </div>

        </footer>
    )
}

export default Footer;