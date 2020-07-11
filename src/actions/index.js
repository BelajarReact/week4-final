const setLoginState = (loginData) => {
    return {
        type: 'SET_LOGIN_STATE',
        payload: loginData,
    };
};

const SaveLoginToStorage = (data) =>localStorage.setItem('dankedevSaveLogin', data);


 export const Login = (loginInput) => {
    const {username, password} = loginInput;
    return (dispatch) => {
        if ('hadie87@gmail.com' === username && 'rahasia' ===password){

            dispatch(setLoginState(
                {
                    loginInput,userId:username
                }
            ));
        }else{
            return 'login failed';
        }
    }
}


export const startTimer = (baseTime = 0) => {
    return {
        type: "START_TIMER",
        baseTime: baseTime,
        now: new Date().getTime()
    };
}

export const  stopTimer =()  =>{
    return {
        type: "STOP_TIMER",
        now: new Date().getTime()
    };
}

export const resetTimer =() =>{
    return {
        type: "RESET_TIMER",
        now: new Date().getTime()
    };
}


