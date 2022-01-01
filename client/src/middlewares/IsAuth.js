import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';

const IsAuth = (WrappedComponent) => {

    const Wrapper = (props) => {

        const { appData } = useContext(GlobalContext);
        const navigate = useNavigate();

        useEffect(() => {
            if (appData.userData.token) {
                navigate('/');
            }
        })

        return (
            <WrappedComponent {...props} />
        )
    }

    return Wrapper;
}

export default IsAuth;