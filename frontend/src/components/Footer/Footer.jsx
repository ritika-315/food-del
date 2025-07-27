import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt=" " />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus consequatur sapiente accusantium repellendus alias eligendi ducimus perferendis consequuntur! Officiis excepturi perferendis facere explicabo, ullam illo sequi voluptatibus quia omnis pariatur.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="Facebbok" />
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
