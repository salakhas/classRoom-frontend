import { REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_LOADING } from "./action";

const initState = {
    loading: false,
    registered: false,
    token: "",
    error: false
};

const registerReducer = (store = initState,{type,payload}) => {
    switch(type){
        case REGISTER_LOADING:
            return {...store,loading: true};
        case REGISTER_SUCCESS:
            return {...store,loading:false,registered:true,token:payload,error:false};
        case REGISTER_FAILURE:
            return {...store,loading:false,error:true,registered:false};
        default:
            return store;
    }
};



export {registerReducer};