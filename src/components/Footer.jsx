
import {FaCopyright} from 'react-icons/fa'
import './Footer.scss'



export default function Footer() {

  return (
     <div className="App-footer">
       
       <div className='contain'>

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
