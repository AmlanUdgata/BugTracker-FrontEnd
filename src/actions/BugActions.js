// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import {DELETE_BUG, GET_ERRORS, GET_BUG, GET_BUGS} from './types';
export const createBug=(bug,history)=>async (dispatch)=>{
    try{
const res = await axios.post("http://localhost:8080/bugs/add",bug);
history.push("/bugDashboard");
    }catch(error){
        dispatch(
           { 
               type:GET_ERRORS,
            payload : error.response.data,
           }
        );
    }
};
export const getBugs=()=> async(dispatch)=>{
    const res = await axios.get("http://localhost:8080/bugs/viewall");
    dispatch({
        type: GET_BUGS,
        payload:res.data,
    });
};

export const getBug=(id,history) => async (dispatch)=>{
    const res = await axios.get(`http://localhost:8080/bugs/view/${id}`);
    dispatch({
        type:GET_BUG,
        payload:res.data,
    });
} ;

export const deleteBug = id => async dispatch=>{
    await axios.delete(`http://localhost:8080/bugs/delete/${id}`);
    dispatch({
        type: DELETE_BUG,
        payload:id,
    })
};