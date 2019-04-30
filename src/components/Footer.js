import React from 'react';
import '../styles/Footer.scss';

const Footer = () => (
    <footer className='app-footer'>
        <p className='app-footer_text'>
            Powered by <a
                className='link-to-api'
                href='https://newsapi.org/'
                target='blank'
            >NewsAPI</a>
        </p>
    </footer>
);

export default Footer;
