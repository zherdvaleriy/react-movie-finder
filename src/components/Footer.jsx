/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
import {FaCopyright} from 'react-icons/fa'
import './Footer.css'
// import IconTwitter from '../icons/twitter.svg'
// import IconInstagram from '../icons/instagram.svg'
// import IconGithub from '../icons/gitHub.svg'
// import IconlIinkedin from '../icons/linkedIn.svg'


export default function Footer() {
  return (
     <div className="App-footer">
       
       <div className='contain'>
          {/* <ul classNameName='social-icons'>
            <li classNameName='soc-icon'><a  href="https://twitter.com" target='_blank' rel='noreferrer'><img src={IconTwitter} alt="twitter" /></a></li>
            <li classNameName='soc-icon'><a  href="https://instagram.com" target='_blank' rel='noreferrer'><img src={IconInstagram} alt="" /></a></li>
            <li classNameName='soc-icon'><a  href="https://github.com" target='_blank' rel='noreferrer'><img src={IconGithub} alt="" /></a></li>
            <li classNameName='soc-icon'><a  href="https://linkedin.com" target='_blank' rel='noreferrer'><img src={IconlIinkedin} alt="" /></a></li>
          </ul> */}
          <ul className='social-icons'>
              <li>
                <a href="https://facebook.com" target= '_blank' rel='noreferrer'>
                  <i className="fab fa-facebook-f icon"></i> </a>
              </li>
              <li>
                <a href="https://twitter.com" target= '_blank' rel='noreferrer'><i className="fab fa-twitter icon"></i></a>
              </li>
              <li>
                <a href="https://linkedin.com" target= '_blank' rel='noreferrer'><i className="fab fa-linkedin-in icon"></i></a></li>
              <li>
                <a href="https://github.com" target= '_blank' rel='noreferrer'><i className="fab fa-github icon"></i></a></li>
           </ul>

       <div className='copy'><span>2023</span> <span><FaCopyright style={{marginLeft: '5px'}}/></span> </div>

       </div>
      
      </div>
  )
}
