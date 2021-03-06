import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
  // const updated = result * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resElId: resElId
  };
};