import axios from 'axios'
import Api from '../assets/restApi'

export const addTransaction = (data) => {
    return {
      type: 'ADD_TRANSACTION',
      payload: axios({
        url: `${Api.host}/transaction`,
        method: 'POST',
        data: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }
  export const getTransaction = (transactionId) => {
    return {
      type: 'GET_TRANSACTION',
      payload: axios.get(`${Api.host}/transactionOrder/${transactionId}`)
    }
  }