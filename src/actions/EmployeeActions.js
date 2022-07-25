// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import {DELETE_EMPLOYEE, GET_ERRORS, GET_EMPLOYEE, GET_EMPLOYEES} from './types';
export const createEmployee=(employee,history)=>async (dispatch)=>{
    try{
const res = await axios.post("http://localhost:8080/employee/add",employee);
history.push("/employeeDashboard");
    }catch(error){
        dispatch(
           { 
               type:GET_ERRORS,
            payload : error.response.data,
           }
        );
    }
};
export const getEmployees=()=> async(dispatch)=>{
    const res = await axios.get("http://localhost:8080/employee/viewall");
    dispatch({
        type: GET_EMPLOYEES,
        payload:res.data,
    });
};

export const getEmployee=(id,history) => async (dispatch)=>{
    const res = await axios.get(`http://localhost:8080/employee/view/${id}`);
    dispatch({
        type:GET_EMPLOYEE,
        payload:res.data,
    });
} ;

export const deleteEmployee = id => async dispatch=>{
    await axios.delete(`http://localhost:8080/employee/delete/${id}`);
    dispatch({
        type: DELETE_EMPLOYEE,
        payload:id,
    })
};