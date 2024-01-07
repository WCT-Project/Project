import React from "react";
import '../css/footer_menu.css';
import facebook from '../img/facebook.svg'
import github from '../img/github.svg'
import youtube from '../img/youtube.svg'
import tiktok from '../img/tiktok.svg'

const Footer_menu = () =>{
    return(

        <footer className="nest-footer footer-nest">
            <div className="nest-footer-row">
                <div className="nest-footer-col first">
                    <h3>About</h3>
                    <p>The webstie can analys your budget for joing a trip with the best estimate price and quality of place</p>
                    <div className="nest-icon-footer">
                        <a href='https://www.facebook.com/profile.php?id=100065175015705'><img src={facebook} className="icon-footer"></img></a>
                        <a href="https://github.com/CSTVann"><img src={github} className="icon-footer"></img></a>
                        <a><img src={youtube} className="icon-footer"></img></a>
                        <a><img src={tiktok} className="icon-footer"></img></a>
                    </div>
                </div>
                <div className="nest-footer-col nest-contact">
                    <h3>Contact</h3>
                    <p>Khan Toul Kork/Phnom Penh</p>
                    <p>tripwallet@gmail.com</p>
                    <p>+855 69 227 495</p>
                </div>
                <div className="nest-footer-col nest-social">
                    <h3>Social Media</h3>
                    <p>Trip Wallet</p>
                    <p>Insta Trip Wallet</p>
                    <p>Tik Trip Wallet</p>
                </div>
            </div>
            <hr className="br-footer"></hr>
            <div className="dev-names">
                <div className="footer-least-one">
                    <div className="nest-developer">
                        <p5>Jingthean Teng</p5>
                        <div className="nest-a-developer">
                            <a href='https://www.facebook.com/profile.php?id=100008341302892'><img src={facebook} className="icon-footer"></img></a>
                            <a href="https://github.com/jingtheanteng"><img src={github} className="icon-footer"></img></a>
                        </div>
                    </div>
                    <div className="nest-developer">
                        <p5>Sotheavann Chhorn</p5>
                        <div className="nest-a-developer">
                            <a href='https://www.facebook.com/profile.php?id=100065175015705'><img src={facebook} className="icon-footer"></img></a>
                            <a href="https://github.com/CSTVann"><img src={github} className="icon-footer"></img></a>
                        </div>
                    </div>
                    <div className="nest-developer">
                        <p5>Sothieliya Thoeun</p5>
                        <div className="nest-a-developer">
                            <a href='https://www.facebook.com/profile.php?id=100005030115710'><img src={facebook} className="icon-footer"></img></a>
                            <a href="https://github.com/aliyathoeun"><img src={github} className="icon-footer"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer_menu