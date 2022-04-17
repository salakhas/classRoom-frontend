import { GET_TEACHERS ,TEACHERS_ERROR,TEACHERS_LOADING} from "./action";

const initState = {
    loading: false,
    error:false,
    
    teachers:[],
};

export const teachersReducer = (store = initState,{type, payload}) => {
   
    switch(type){
        case TEACHERS_LOADING:
            return {...store,loading:true};
        case GET_TEACHERS:
                return {...store,loading:false,teachers: [...payload],error:false};
        case TEACHERS_ERROR:
            return {...store,loading:false,error:true,teachers:[]};
        default:
            return store;
    }
}