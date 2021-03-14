const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // return newState;
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value
      };
    case 'STORE_RESULT':
      
      return {
        ...state,
        results: state.results.concat({id: new Date().getTime(), value: state.counter})
      }
    default:
      return state;
  }
}

export default reducer;