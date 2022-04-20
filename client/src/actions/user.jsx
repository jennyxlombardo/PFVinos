import axios from 'axios'
import { BASEURL } from '../assets/URLS'
import { GET_USER_DETAIL,  GET_ALL_USERS } from './types'


export function getUser () {
  return async function (dispatch) {
    try {
      var json = await axios(`${BASEURL}/user/login`)
      return dispatch({
        type: GET_USER_DETAIL,
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getAllUser() {
    return async function (dispatch) {
        try {
            var json = await axios(`${BASEURL}user/all`)
            console.log(json.data)
            return dispatch({
                type: GET_ALL_USERS,
                payload: json.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}