import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        localStorage.clear();

        dispatch({
            type: 'LOGOUT'
        });

        navigate('/about');
    }, []);

    return null;
}

export default Logout;