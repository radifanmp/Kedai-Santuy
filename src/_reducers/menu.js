initialState = {
    dataItem: '',
    isLoading: true
  }
  
  export default menu = (state = initialState, action) => {
    switch (action.type) {
      
      case 'GET_MENU_PENDING':
        return {
          ...state,
          isLoading: true
        }
        
      case 'GET_MENU_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data,
          isLoading: false
        }
        
      case 'GET_MENU_REJECTED':
        return {
          ...state,
          dataItem: null,
          isLoading: false
        }
        
  
      
      case 'GET_CATEGORI_MENUS_PENDING':
        return {
          ...state,
          dataItem: null,
          isLoading: true
        }
        
      case 'GET_CATEGORI_MENUS_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data.menus,
          isLoading: false
        }
        
      case 'GET_CATEGORI_MENUS_REJECTED':
        return {
          ...state,
          dataItem: null,
          isLoading: false
        }
        
      default:
        return state
        
    }
  }