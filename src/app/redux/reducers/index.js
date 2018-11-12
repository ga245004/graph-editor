import {combineReducers} from 'redux'

const updateCode = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CODE':
            console.log('state updated..');
            return Object.assign({}, state, {code: action.code})
        default:
            return state
    }
}

export default combineReducers({updateCode: updateCode})