import React from 'react';
import './components-styles.css';

const year = new Date().getFullYear();

function Footer () {
    return (
        <div>
            <div class="contact">
                <h2>Get In Touch</h2>
                <p class="contact-para">Email or call us to set up a consult</p>
                <p> Email : haribhutanadhu@gmail.com</p>
                <p> Phone : 8688907570</p>
                <div class="icon-list">
                    <a href="#" class="end-icon"><i class="fa fa-facebook-square w3-xlarge" ></i></a>
                    <a href="#" class="end-icon"><i class="fa fa-envelope w3-xlarge " ></i></a>
                    <a href="#" class="end-icon"><i class="fa fa-github w3-xlarge " ></i></a>
                    <a href="#" class="end-icon"><i class="fa fa-instagram w3-xlarge" ></i></a>
                </div>
            </div>
            <div className="copyright">
                <p> © {year}  All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Footer;
