import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import './Navigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { useWindowSize } from '../utils/hooks';


const Navigation = () => {

    const { username, token } = useContext(GlobalContext);

    const windowSize = useWindowSize();

    useEffect(() => {
        console.log(windowSize);
    }, [windowSize])

    return (
        <div className='container-fluid' id='nav-main-app'>
            {windowSize.width > 576 ? <NavDesktop /> : <NavMobile />}
        </div>
    );
}

const NavDesktop = () => {

    return (
        <div className="nav-desktop-wrapper">
            <div className="logo-wrapper" >
                <img className='img-fluid' src="/media/globe.svg" alt="logo img" width='30' />
            </div>
            <ul className="links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/initial-form">Login/Register</Link>
                </li>

            </ul>
        </div>
    );
}

const NavMobile = () => {

    const [menuClick, setMenuClick] = useState(false);

    const onArrowClick = (e) => {
        e.preventDefault();
        setMenuClick(!menuClick);
    }

    return (
        <div className={`nav-mobile-wrapper ${menuClick ? 'show-menu' : 'hide-menu'}`}>
            <div className="menu-arrow" onClick={onArrowClick}>
                <FontAwesomeIcon className='arrow-icon' icon={faChevronRight} style={{
                    color: 'var(--primary)',
                    transform: menuClick ? 'rotate(180deg)' : ''
                }} />
            </div>

            <div className={`menu-elements`} style={{
                opacity: menuClick ? '1' : '0'
            }}>
                <div className="logo-wrapper">
                    <img className='img-fluid' src="/media/globe.svg" alt="logo img" width='30' />
                </div>
                <ul className="links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='last-link'>
                        <Link to="/initial-form">Login/Register</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navigation;