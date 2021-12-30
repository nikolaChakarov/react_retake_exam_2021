import React, { useState } from 'react';
import './InitialForm.scss';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Login from './Login';
import Register from './Register';

const InitialForm = () => {

    const [chooseForm, setChooseForm] = useState('login')
    const navigate = useNavigate();

    const onFormClose = (e) => {

        navigate('/');
        return;
    }

    return (
        <div className='container-fluid' id='initial-form'>

            <div className="inner-initial">
                <div className="close-bttn-position">
                    {chooseForm === 'login' ?
                        <Login setChooseForm={setChooseForm} /> :
                        <Register setChooseForm={setChooseForm} />}

                    <div className="close-el" onClick={onFormClose}>
                        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InitialForm;