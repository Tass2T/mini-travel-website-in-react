import './index.css'
import Cards from '../Card'
import amazonImg from "../images/img-9.jpg"
import baliImg from '../images/img-2.jpg'
import atlanticImg from '../images/img-3.jpg'
import desertImg from '../images/img-8.jpg'
import FootballImg from '../images/img-4.jpg'

export default function Home () {

    return (
        <>
            <div className="home-section">
                    <h1>ADVENTURE AWAITS</h1>
                    <p>What are you waiting for?</p>
                    <button>GET STARTED</button>
            </div>
            <div className="articles">
                <h1>Choose among dreamy destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <Cards
                            src={amazonImg}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                            />
                            <Cards
                            src={baliImg}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                            />
                        </ul>
                        <ul className='cards__items_secondary'>
                            <Cards
                            src={atlanticImg}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                            />
                            <Cards
                            src={FootballImg}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                            />
                            <Cards
                            src={desertImg}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}