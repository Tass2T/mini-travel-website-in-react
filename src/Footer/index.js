import './index.css'

export default function Footer ({logo}) {
    return (
        <div className="footer-section">
            <div className="footer-area">
                <img src={logo} alt="logo-footer"/>
                <p>TassTravel©2020</p>
                <div className='social-area'>
                    <i class="fab fa-facebook-square fa-2x"></i>
                    <i class="fab fa-instagram-square fa-2x"></i>
                    <i class="fab fa-twitter-square fa-2x"></i>
                    <i class="fab fa-linkedin-in fa-2x"></i>
                </div>
            </div>
        </div>
    )
}