export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const loginData = ({email,password}) => async(dispatch,getState) => {
    const loginDetails = getState();
    console.log('loginDetails:', loginDetails);

    dispatch(loginLoading());
    axios.post('https://classroom325.herokuapp.com/login',{email,password})
        .then((res)=>{
            console.log('res:', res.data);
            console.log('res.token:', res.token)
            dispatch(loginSuccess({username,token:res.data.token}));
            alert("Login Successful");
        })
        .catch((err)=>{
            console.log('err:', err);
            dispatch(loginFailure());
        })
}