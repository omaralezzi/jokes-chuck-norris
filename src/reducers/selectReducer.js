
//Setup our selectReducer
const selectReducer = (state, {type, payload}) => {
    switch(type) {
        case 'CHANGE':
            return state = payload
        default:
            return state
    }
}

export default selectReducer