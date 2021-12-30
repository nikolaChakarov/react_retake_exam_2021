import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    userId: localStorage.getItem('id'),
    error: {}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

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

    }

    return (
        <GlobalContext.Provider value={{
            ...state,
            registerUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
};