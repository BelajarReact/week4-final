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


