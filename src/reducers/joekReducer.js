//Setup the joke reducer
const jokeReducer = (state, {type, payload}) => {
    switch(type) {
        case 'GET_JOKE':
            return state = payload
            case 'ERROR':
                return state = payload
        default:
            return state
    }
}

export default jokeReducer