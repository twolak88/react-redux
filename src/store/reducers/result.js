import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  // const id = 2;
  // const newArray = [...state.results];
  // newArray.splice(id, 1);
  const updatedArray = state.results.filter(result => result.id !== action.resElId);
  return updateObject(state, {results: updatedArray});
}

const storeResult = (state, action) => {
  // Change data
  const results = state.results.concat({id: new Date().getTime(), value: action.result * 2});
  return updateObject(state, {results: results});
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
}

export default reducer;