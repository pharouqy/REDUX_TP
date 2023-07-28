import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/posts");
    dispatch({ type: GET_POSTS, payload: res.data });
  };
};

export const addPost = (data) => {
  return async (dispatch) => {
    await axios.post("http://localhost:3000/posts", data);
    dispatch({ type: ADD_POST, payload: data });
  };
};

export const editPost = (data) => {
  return async (dispatch) => {
    await axios.put(`http://localhost:3000/posts/${data.id}`, data);
    dispatch({ type: EDIT_POST, payload: data });
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3000/posts/${postId}`);
    dispatch({ type: DELETE_POST, payload: postId });
  };
};
