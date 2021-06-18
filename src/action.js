import axios from "axios";

// export const addPost = async() => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

//   console.log(response);

//   return {
//     type: "ADD_POST",
//     payload: response.data,
//   };
// };

// export const addPost = () => {
//   return async (dispatch, getState) => {
//     const responce = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     dispatch({
//       type: "ADD_POST",
//       payload: responce.data,
//     });
//   };
// };

// ---------*--- javascript shortHand syntex ---------*---

// export const addPost = () => async (dispatch, getState) => {
//   const responce = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   dispatch({
//     type: "ADD_POST_REQUEST",
//     payload: responce.data,
//   });
// };

export const addPost = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCH_POST_REQUEST",
  });

  try {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: "ADD_POST_REQUEST",
      payload: responce.data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR_POST_REQUEST",
      payload: error,
    });
  }
};
