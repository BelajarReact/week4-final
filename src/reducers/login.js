function login(state,action){
    if (typeof state === 'undefined') {
        return ''
    }

    return [
        ...state,action
    ]
}

export default login;