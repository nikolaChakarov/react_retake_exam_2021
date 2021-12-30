import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const InitialForm = () => {

    const [click, setClick] = useState(false)

    return (
        <div className='container-fluid' id='initial-form'>

            {!click ? <div>
                <Login />
                <p>You don't have an account? Please <span onClick={() => setClick(!click)}>Register</span> here</p>
            </div> : <div>
                <Register />
                <p>You have an account? Please <span onClick={() => setClick(!click)}>Login</span> here</p>
            </div>}
        </div>
    )
}

export default InitialForm;