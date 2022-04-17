import { GET_CLASSES ,CLASSES_ERROR,CLASSES_LOADING} from "./action";

const initState = {
    loading: false,
    error:false,
    
    classes:[],
};

const classesReducer = (store = initState,{type, payload}) => {
   
    switch(type){
        case CLASSES_LOADING:
            return {...store,loading:true};
        case GET_CLASSES:
                return {...store,loading:false,classes: payload,error:false};
        case CLASSES_ERROR:
            return {...store,loading:false,error:true,classes:[]};
        default:
            return store;
    }
}


export {classesReducer}