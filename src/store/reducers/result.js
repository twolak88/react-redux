import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      // Change data
      const results = state.results.concat({id: new Date().getTime(), value: action.result * 2});
      return updateObject(state, {results: results});
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.resElId);
      return updateObject(state, {results: updatedArray});
    default:
      return state;
  }
}

export default reducer;