import './index.css'
import {Link} from 'react-router-dom'

export default function Error404 () {
    return (
        <div className='error404-section'>
            <i class="fas fa-skull-crossbones fa-10x" style={{color:"black"}}></i>
            <h1>404</h1>
            <p><span>This page doesn't exist</span></p>
            <Link to="/"><button>Return to homepage!</button></Link>
        </div>
    )
}