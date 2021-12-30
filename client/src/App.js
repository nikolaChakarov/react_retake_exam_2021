import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import InitialForm from './components/InitialForm';

const App = () => {
    return (
        <div className="container-fluid" id="app">
            <Navigation />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/initial-form" element={<InitialForm />} />
            </Routes>

        </div>
    )
}

export default App;