initialState = {
    dataItem: '',
    isLoading: true
  }
  
  export default categori = (state = initialState, action) => {
    switch (action.type) {
      
      case 'GET_CATEGORI_PENDING':
        return {
          ...state,
          isLoading: true
        }
        
      case 'GET_CATEGORI_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data,
          isLoading: false
        }
        
      case 'GET_CATEGORI_REJECTED':
        return {
          ...state,
          dataItem: null,
          isLoading: false
        }
        
      default:
        return state
        
    }
}