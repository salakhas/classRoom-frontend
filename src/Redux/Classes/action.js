import axios from "axios";


export const GET_CLASSES = "GET_CLASSES";
export const CLASSES_LOADING = "CLASSES_LOADING";
export const CLASSES_ERROR = "CLASSES_ERROR";

export const classesLoading = () => (
    {
        type: CLASSES_LOADING
    }
);

export const classesFailure = () => (
    {
        type: CLASSES_ERROR,
    }
)


export const getClasses = (payload) => ({
    type: GET_CLASSES,
    payload
});




export const getClassesData = () => async(dispatch)=>{
    console.log("hello")
   dispatch(classesLoading());
    axios.get("https://classroom325.herokuapp.com/class")
    .then((res)=>{
        console.log('res', res.data)
        dispatch(getClasses(res.data))})
    .catch((err)=>{
        console.log('err:', err)});
        dispatch(classesFailure());
        
}