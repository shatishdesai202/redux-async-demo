const initialState = {
  items: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return { ...state, loading: true, error: null };
    case "ADD_POST_REQUEST":
      return { ...state, items: action.payload, loading: false };
    case "ERROR_POST_REQUEST":
      return { ...state, items: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;