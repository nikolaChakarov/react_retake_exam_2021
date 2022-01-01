import { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import AppReducer from './AppReducer';
import { setLocalStorage } from '../utils/setLocalStorage';


const initialState = {
    userData: {
        username: localStorage.getItem('username'),
        userId: localStorage.getItem('userId'),
        token: localStorage.getItem('token')
    },
    error: ''
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const navigate = useNavigate();

    const registerUser = async (userData) => {

        try {
            const dbRegUserResponse = await (await (fetch('http://localhost:5000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            }))).json();

            console.log(dbRegUserResponse);
            if (!dbRegUserResponse) {
                throw '...some error'
            }


        } catch (err) {
            console.error(err);
        }

    };

    const loginUser = async (userData) => {

        try {
            const dbLoginRes = await (await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })).json();

            if (dbLoginRes.msg) {
                throw dbLoginRes.msg;
            }

            console.log(dbLoginRes);

            setLocalStorage(dbLoginRes);

            dispatch({
                type: 'LOGIN',
                payload: dbLoginRes
            })

            navigate('/');

        } catch (err) {
            console.error(err);

            dispatch({
                type: 'ERROR',
                payload: err
            });
        }

    };

    const hideErrorBox = (inputName, setErrors) => {

        setErrors(prev => {
            return {
                ...prev,
                [inputName]: ''
            }
        });
    };

    const onInputChanged = (e, setState) => {

        const currentInput = e.target.name;
        const value = e.target.value;

        setState(prev => {
            return {
                ...prev,
                [currentInput]: value
            }
        })
    };

    const onInitialFormSubmit = (e, userdata, setErrors, dbFunc, clearFunc) => {
        e.preventDefault();

        clearFunc(false);

        const tempErrors = {}
        let isInputEmpty = false;

        const inputNames = Object.keys(userdata);

        inputNames.forEach(i => {
            if (userdata[i] === '') {
                tempErrors[i] = `Please, enter your ${i}`;
                isInputEmpty = true;
            }
        });

        setErrors({
            ...tempErrors
        });

        if (isInputEmpty) {
            return;
        }

        console.log('conection to database en course...');

        dbFunc({ ...userdata });
    }

    return (
        <GlobalContext.Provider value={{
            appData: { ...state },
            dispatch,
            registerUser,
            loginUser,
            hideErrorBox,
            onInputChanged,
            onInitialFormSubmit
        }}>
            {children}
        </GlobalContext.Provider>
    )
};