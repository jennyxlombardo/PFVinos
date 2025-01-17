import axios from 'axios'
import { BASEURL } from '../assets/URLS'
import {
    GET_USER_DETAIL,
    GET_ALL_USERS,
    POST_USER,
    DELETE_USER,
    GET_BY_EMAIL,
    CHANGE_CATEGORY,


} from './types'

export function getUser () {
  return async function (dispatch) {
    try {
      var json = await axios(`${BASEURL}/user/reg`);
      return dispatch({
        type: GET_USER_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}



export function getAllUser () {
  return async function (dispatch) {
    try {
      var json = await axios(`${BASEURL}/user/all`)
      console.log(json.data)
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}



export function postUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${BASEURL}/user/admin/userRegister`,
        payload
      );  
      return dispatch({
        type: POST_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log("desde error request", error);
    }
  };
}


export function changCategory(payload) {
    console.log(payload)
    return async function (dispatch) {
        try {
            const response = await axios.put(`${BASEURL}/user/userAdmin/${payload}`)
            return dispatch({
                type: CHANGE_CATEGORY,
                payload: response.data,
            })

        } catch (error) {
            console.log("desde error request", error);
        }
    }
    
}

export function deleteUser(payload) {
  return async function (dispatch) {
      const response = await axios.delete(`${BASEURL}/user/${payload}`);
    dispatch({
      type: DELETE_USER,
      payload: response.data,
    });
  };
}
