
  export const mapDispatchToProps = dispatch => {
    return {
        setmap: (e) => dispatch({type:'setMap',value:e}),       
        setvectorSource: (e) => dispatch({type:'setvectorSource',value:e}),       
  };}