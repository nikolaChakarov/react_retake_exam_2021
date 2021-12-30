import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import About from './components/About';

const App = () => {
    return (
        <div className="container-fluid" id="app">
            <Navigation />

            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>

        </div>
    )
}

export default App;