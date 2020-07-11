import React, {Component} from "react";
import {Link} from "react-router-dom"
import Logo from "../logo.svg"

class SocialMedia extends Component{


    render() {
        const {socials} = this.props;

        return(

               <div className="social-media d-flex align-items-center justify-content-center">
                   {socials.map((item,index) => <a key={index} href={item.link} title={`Follow me at ${item.type}`} target="_blank"><i className={`fa ${item.icon}`}></i></a>)}
               </div>

        )
    }
}

const Footer = () => {

    const socialMedias = [
        {
            type: "facebook", icon: "fa-facebook-official", link: "https://fb.com/hadie.danker"
        },
        {
            type: "github", icon: "fa-github", link: "https://github.com/BelajarReact"
        },
        {
            type: "twitter", icon: "fa-twitter", link: "https://twitter.com/hadie87"
        },
        {
            type: "instagram", icon: "fa-instagram", link: "https://instagram.com/hadie.danker"
        },
        {
            type: "youtube", icon: "fa-youtube-play", link: "https://www.youtube.com/user/dankerizer"
        }
    ]

    const Pages  = [
        {
            link : "/",
            title :'Home page'
        },
        {
            link : "/about",
            title :'About'
        },
        {
            link : "/privacy",
            title :'Privacy'
        },
    ]
    return (
        <footer className="footer">
            <a href="https://fb.me/hadie.danker" className="myLogo white" target="_blank"><img src={Logo} height="30px"
                                                                                               width="30px" alt=""/></a>
            <p style={{marginTop: "20px"}}><i className="fa fa-user-circle-o"></i> Muhammad Syamsul Hadi</p>
            <p>Ini adalah final project dari kelas React FrontEnd by SanberCode.com</p>

            <p>Follo our social Media</p>

            <SocialMedia socials={socialMedias}/>
            <ul className="nav justify-content-center">
                {Pages.map((item,key) => <li className="nav-item" key={key}><Link className="nav-link" to={item.link} >{item.title}</Link></li>)}
            </ul>
        </footer>
    )
}

export default Footer;