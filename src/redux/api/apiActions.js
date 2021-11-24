import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./apiTypes";

export const fetchApiRequest = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_API_REQUEST,
    });
  };
};
export const fetchApiSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_API_SUCCESS,
      payload: data,
    });
  };
};
export const fetchApiRequest = (error) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_API_FAILURE,
      payload: error,
    });
  };
};
