import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>Help</Link>
            <Link to='/'>Review</Link>
            <Link to='/'>Career</Link>
            <Link to='/'>Terms</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Phone</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Address</Link>
            <Link to='/'>Email</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Partner</h2>
            <Link to='/'>Amazone</Link>
            <Link to='/'>Google</Link>
            <Link to='/'>Microsoft</Link>
            <Link to='/'>Apple</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Sosmed</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Google</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
