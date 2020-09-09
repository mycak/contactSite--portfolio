const changeScrollYReducer = (state = 0, action ) => {
    if (action.type === 'SCROLLY') {
        state = action.payload;
        return state;
    }
    else return state;
}

export default changeScrollYReducer;
