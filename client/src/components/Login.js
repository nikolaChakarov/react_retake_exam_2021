import React from 'react'

const Login = ({ setChooseForm }) => {
    return (
        <div className='container-fluid' id="login-form">
            <form className='login-form form'>
                <div className="input-set">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='username' />
                </div>

                <div className="input-set">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='username' />
                </div>

                <button className='btn bttn-custom'>Login</button>
            </form>

            <p>You don't have an account? Pleace <span onClick={() => {
                setChooseForm('register');
            }}>Register</span> here</p>
        </div>
    )
}

export default Login;