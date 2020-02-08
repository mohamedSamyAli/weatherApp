const initialState = {
    map:null,
    vectorSource:null 
  };
  
  const reducer = ( state = initialState, action ) => {
      switch ( action.type ) {
          case 'setMap':
              return {
                  ...state,
                  map:action.value
              }
              case 'setvectorSource':
              return {
                  ...state,
                  vectorSource:action.value
              }
                  default: return state
              }    
  };
  
  export default reducer;