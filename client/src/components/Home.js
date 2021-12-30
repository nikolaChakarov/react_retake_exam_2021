import React from 'react';
import './Home.scss';

import { Routes, Route } from 'react-router-dom';
import InitialForm from './InitialForm';

const Home = () => {
    return (
        <div className='container-fluid' id='home-app'>

            <div className="back-image">
                <img className='img-fluid' src="/media/back.jpg" alt="background image" />
            </div>

            <div className="home-title">
                <h1 data-title="WELCOME">WELCOME</h1>
            </div>

            <Routes>
                <Route path="initial-form" element={<InitialForm />} />
            </Routes>
        </div>
    )
}

export default Home;