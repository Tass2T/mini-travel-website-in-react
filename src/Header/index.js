
import './index.css'
import {Link} from 'react-router-dom'

export default function Header ({logo}) {

    return (
        <div className="header-component">
            <div className="navbar">
                <div className="logo"><Link to='/'><img src={logo}/></Link></div>
                <ul className="nav-links">
                    <li className='nav-item'><Link to='/'>Home</Link></li>
                    <li className='nav-item'><Link to='/services'>Services</Link></li>
                    <li className='nav-item'><Link to='/about'>About</Link></li>
                    <li><button className="sign-up">SIGN UP</button></li>
                </ul>
            </div>
        </div>
    )
}