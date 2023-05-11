import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_LOAD } from "../constant/actionsTypes";
import axios from "axios"


export const getUsers = async (dispatch)=> {
    
    dispatch({type:GET_USER_LOAD})
    try {
        let result = await axios.get('/api/contact/')
        console.log(result)
        dispatch({
            type: GET_USER_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_USER_FAIL,
            payload: error
        })
    }
}