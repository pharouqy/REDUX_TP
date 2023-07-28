import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/user");
    dispatch({ type: GET_USER, payload: res.data[0] });
  };
};
