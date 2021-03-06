const AppReducer = (state, action) => {

    switch (action.type) {

        case 'REGISTER':
            return {
                ...state,
                username: action.payload
            };

        case 'LOGIN':
            return {
                ...state,
                userData: { ...action.payload }
            };
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                userData: {}
            }

        default:
            return state;
    }

}

export default AppReducer;