import React from 'react'

const Login = () => {
    return (
        <div className='container-fluid' id="login-form">
            <form>
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
        </div>
    )
}

export default Login;