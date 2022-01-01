import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SetError } from '../utils/SetError';

import { useNavigate } from 'react-router-dom'

const Login = ({ setChooseForm }) => {

    const navigate = useNavigate();

    const { appData, dispatch, loginUser, onInputChanged, hideErrorBox, onInitialFormSubmit } = useContext(GlobalContext);

    const [userdata, setUserdata] = useState({
        username: '',
        password: ''
    });

    const [formErr, setFormErr] = useState({});
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {

        if (appData.userData.token) {
            navigate('/about');
            return;
        }

        if (showBox) {
            dispatch({
                type: 'ERROR',
                payload: ''
            });
        }

    }, [appData.error, showBox])


    return (
        <div className='container-fluid' id="login-form">
            <form
                className='login-form form'
                onSubmit={(e) => onInitialFormSubmit(e, userdata, setFormErr, loginUser, setShowBox)}
            >
                <div className="input-set">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name='username'
                        id='username'
                        placeholder='username'
                        value={userdata.username}
                        onChange={(e) => onInputChanged(e, setUserdata)}
                    />

                    {formErr.username && SetError('username', formErr.username, hideErrorBox, setFormErr)}
                </div>

                <div className="input-set">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name='password'
                        id='password'
                        placeholder='password'
                        value={userdata.password}
                        onChange={(e) => onInputChanged(e, setUserdata)}
                    />

                    {formErr.password && SetError('password', formErr.password, hideErrorBox, setFormErr)}
                </div>

                <button type='submit' className='btn bttn-custom'>Login</button>
            </form>

            <p>You don't have an account? Pleace <span onClick={() => {
                setChooseForm('register');
            }}>Register</span> here</p>

            {appData?.error && SetError('db-error', appData.error, '', setShowBox, 'db-error-el')}
        </div>
    )
}

export default Login;