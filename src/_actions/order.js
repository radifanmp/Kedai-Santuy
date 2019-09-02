import axios from 'axios'
import Api from '../assets/restApi'

export const addOrder = (data) => {
  return {
    type: 'ADD_ORDER',
    payload: axios({
      url: `${Api.host}/order`,
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const editOrder = (id,data) => {
  return {
    type: 'EDIT_ORDER',
    payload: axios({
      url: `${Api.host}/order/${id}`,
      method: 'PATCH',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
export const deleteOrder = (id) => {
  return {
    type: 'REMOVE_ORDER',
    payload: axios({
      url: `${Api.host}/order/${id}`,
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}