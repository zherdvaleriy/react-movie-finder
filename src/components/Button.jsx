import './Button.css'
import {Link} from 'react-router-dom'

export default function Button() {


  return (
    <div className="container-name">
        <Link className="example_b" href="#" target="_blank" rel="nofollow">
          <span>Home</span>
        </Link>
    </div>
  )
}
