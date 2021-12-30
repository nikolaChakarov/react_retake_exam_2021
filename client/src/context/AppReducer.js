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
                username: action.payload
            };

        default:
            return state;
    }

}

export default AppReducer;