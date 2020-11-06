
import './index.css'
export default function Header ({logo}) {

    return (
        <div className="header-component">
            <div className="navbar">
                <div className="logo"><img src={logo}/></div>
                <ul className="nav-links">
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Services</li>
                    <li className='nav-item'>Products</li>
                    <li><button className="sign-up">SIGN UP</button></li>
                </ul>
            </div>
        </div>
    )
}