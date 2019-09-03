import axios from 'axios'
import Api from '../assets/restApi'

export const addtransaction = (data) => {
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
  export const gettransaction = (transactionId) => {
    return {
      type: 'GET_TRANSACTION',
      payload: axios.get(`${Api.host}/transactionOrder/${transactionId}`)
    }
  }