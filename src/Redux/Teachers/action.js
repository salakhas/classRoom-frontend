import axios from "axios";


export const GET_TEACHERS = "TEACHERS";
export const TEACHERS_LOADING = "TEACHERS_LOADING";
export const TEACHERS_ERROR = "TEACHERS_ERROR";

export const teachersLoading = () => (
    {
        type: TEACHERS_LOADING
    }
);

export const teachersFailure = () => (
    {
        type: TEACHERS_ERROR,
    }
)


export const getTeachers = (payload) => ({
    type: GET_TEACHERS,
    payload
});




export const getTeachersData = () => async(dispatch)=>{
    console.log("hello")
   // dispatch(dispatch(teachersLoading()));
    axios.get("https://classroom325.herokuapp.com/teacher")
    .then((res)=>{
        console.log('res', res.data)
        dispatch(getTeachers(res.data))})
    .catch((err)=>{
        dispatch(teachersFailure());
        console.log('err:', err)});
        
}