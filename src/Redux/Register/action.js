import axios from "axios";

export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerLoading = () => ({
    type: REGISTER_LOADING
});

export const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload
});

export const registerFailure = () => ({
    type: REGISTER_FAILURE
});

export const registerData = (data) => async(dispatch,getState) => {
    const loginDetails = getState();
    console.log('loginDetails:', loginDetails);

    dispatch(registerLoading());
    axios.post('https://classroom325.herokuapp.com/register',data)
        .then((res)=>{
            console.log('res:', res.data);
            console.log('res.token:', res.data.token)
            dispatch(registerSuccess({token:res.data.token}));
            alert("Register Successful");
        })
        .catch((err)=>{
            console.log('err:', err);
            dispatch(registerFailure());
        })
}