initialState = {
    dataItem: '',
    message: '',
    isLoading: true
  }
  
  export default transaction = (state = initialState, action) => {
    switch (action.type) {
      //Untuk Transaction ADD 
      case 'ADD_TRANSACTION_PENDING':
        return {
          ...state,
          isLoading: true
        }
        
      case 'ADD_TRANSACTION_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data,
          message: action.payload.data.message,
          isLoading: false
        }
        
      case 'ADD_TRANSACTION_REJECTED':
        return {
          ...state,
          message: action.payload.data.message,
          isLoading: false
        }
        
  
      
      case 'GET_TRANSACTION_PENDING':
        return {
          ...state,
          isLoading: true
        }
        
      case 'GET_TRANSACTION_FULFILLED':
        return {
          ...state,
          dataItem: action.payload.data,
          message: action.payload.data.message,
          isLoading: false
        }
        
      case 'GET_TRANSACTION_REJECTED':
        return {
          ...state,
          message: action.payload.data.message,
          isLoading: false
        }
        
      default:
        return state
        
    }
  }