import axios from 'axios'
import Api from '../assets/restApi'

export const getMenu = () => {
  return {
    type:'GET_MENU',
    payload : axios.get(`${Api.host}/menus`)
  }
}
export const getMenuWhereCategori = (categoriId) => {
  return {
    type:'GET_CATEGORI_MENUS',
    payload : axios.get(`${Api.host}/categori/menu/${categoriId}`)
  }
}