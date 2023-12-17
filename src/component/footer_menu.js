import React from "react";
import '../css/footer_menu.css';
import facebook from '../img/facebook.svg'
import github from '../img/github.svg'
import youtube from '../img/youtube.svg'
import tiktok from '../img/tiktok.svg'

const Footer_menu = () =>{
    return(

        <footer className="nest-footer">
            <div className="nest-footer-row">
                <div className="nest-footer-col first">
                    <h3>About</h3>
                    <p>The webstie can analys your budget for joing a trip with the best estimate price and quality of place</p>
                    <div className="nest-icon-footer">
                        <a href='https://fontawesome.com/search?q=you&o=r'><img src={facebook}></img></a>
                        <a><img src={github}></img></a>
                        <a><img src={youtube}></img></a>
                        <a><img src={tiktok}></img></a>
                    </div>
                </div>
                <div className="nest-footer-col">
                    <h3>Contact</h3>
                    <p>Khan Toul Kork/Phnom Penh</p>
                    <p>tripwallet@gmail.com</p>
                    <p>+855 1234567</p>
                </div>
                <div className="nest-footer-col">
                    <h3>Social Media</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Tiktok</p>
                </div>
            </div>
            <div className="dev-names">
                Develop: "C.STV", "TJT", "ALI"
            </div>
        </footer>

    )
}

export default Footer_menu