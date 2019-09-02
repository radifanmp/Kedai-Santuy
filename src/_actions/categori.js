import axios from 'axios'
import Api from '../assets/restApi'

export const getCategory = () => {
  return {
    type:'GET_CATEGORI',
    payload : axios.get(`${Api.host}/categoris`)
  }
}