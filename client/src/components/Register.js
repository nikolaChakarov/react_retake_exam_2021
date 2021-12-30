import React from 'react'

const Register = () => {
    return (
        <div className='container-fluid' id="register-form">
            <form>
                <div className="input-set">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='username' />
                </div>

                <div className="input-set">
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' placeholder='password' />
                </div>

                <div className="input-set">
                    <label htmlFor="password2">Repeat password</label>
                    <input type="text" id='password2' />
                </div>

                <button className='btn bttn-custom'>Register</button>
            </form>
        </div>
    )
}

export default Register;