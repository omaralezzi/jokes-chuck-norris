//Setup the categories reducer
const categoriesReducer = (state, {type, payload}) => {
    switch(type) {
        case 'GET_CATEGORIES':
            return state = payload
            case 'ERROR':
                return state = payload
        default:
            return state
    }
}

export default categoriesReducer