import React from 'react';
import ReactPlayer from 'react-player';

import './Home.scss';

const Home = () => {
    return (
        <div className='container-fluid' id='home-app'>

            <div className="back-image">
                <img className='img-fluid' src="/media/back.jpg" alt="background image" />
            </div>

            <div className="home-title">
                <h1 data-title="WELCOME">WELCOME</h1>
            </div>
        </div>
    )
}

export default Home;