import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Register = ({ setChooseForm }) => {

    const { appData, registerUser } = useContext(GlobalContext);
    console.log(appData, 'register file');

    return (
        <div className='container-fluid' id="register-form">
            <form className='register-form form'>
                <div className="input-set">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' placeholder='username' />
                </div>

                <div className="input-set">
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' id='password' placeholder='password' />
                </div>

                <div className="input-set">
                    <label htmlFor="password2">Repeat password</label>
                    <input type="text" name='password2' id='password2' />
                </div>

                <button className='btn bttn-custom bttn-register'>Register</button>
            </form>

            <p>You have an account? Please <span onClick={() => setChooseForm('login')}>Login</span> here</p>
        </div>
    )
}

export default Register;