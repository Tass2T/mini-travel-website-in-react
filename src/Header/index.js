import {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export default function Header ({logo}) {

    const [menu, setMenu] = useState(false)

    const displayMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className="header-component">
            <div className="navbar">
                <div className="logo"><Link to='/'><img src={logo}/></Link></div>
                <ul className="nav-links">
                <Link to='/'><li className='nav-item'><p className="nav-items-text">Home</p></li></Link>
                <Link to='/services'><li className='nav-item'><p className="nav-items-text">Services</p></li></Link>
                <Link to='/about'><li className='nav-item'><p className="nav-items-text">About</p></li></Link>
                    <li><button className="sign-up">SIGN UP</button></li>
                </ul>
                <div className="burger-icon">
                    <i class="fas fa-bars fa-2x" onClick={displayMenu}></i>
                </div>
            </div>
            <div className={menu? "mobile-navbar-open" : "mobile-navbar"}>
                <div className="transparent" onClick={displayMenu}></div>
                <div className="menu-nav">
                    <div className="close-button" onClick={displayMenu}>
                        <i class="fas fa-times fa-3x"></i>
                    </div>
                    <div className="mobile-navbar-content">
                        <ul>
                            <Link to='/'><li className='nav-item-mobile'><p className="nav-items-text">Home</p></li></Link>
                            <hr/>
                            <Link to='/services'><li className='nav-item-mobile'><p className="nav-items-text">Services</p></li></Link>
                            <hr/>
                            <Link to='/about'><li className='nav-item-mobile'><p className="nav-items-text">About</p></li></Link>
                        </ul>
                    </div>
                    <div className="sign-up-button-container">
                        <button className="sign-up mobile-button">SIGN UP</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}