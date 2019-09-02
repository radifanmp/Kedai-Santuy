import axios from 'axios'
import Api from '../assets/restApi'

export const getMenu = () => {
  return {
    type:'GET_MENUS',
    payload : axios.get(`${Api.host}/menus`)
  }
}
export const getMenuWhereCategory = (categoryId) => {
  return {
    type:'GET_CATEGORI_MENU',
    payload : axios.get(`${Api.host}/categorI/menu/${categoryId}`)
  }
}