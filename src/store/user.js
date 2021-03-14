import axios from "axios";

const GOT_USER = "GOT_USER";

const gotUser = (user) => ({
  type: GOT_USER,
  user,
});

export const me = () => async (dispatch) => {
  try {
    const { data: user } = await axios.get("/auth/me");
    dispatch(gotUser(user));
  } catch (error) {
    console.error(error);
  }
};

export const login = (body) => async (dispatch) => {
  try {
    const { data: user } = await axios.post("/auth/login", body);
    dispatch(gotUser(user));
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (body) => async (dispatch) => {
  try {
    const { data: user } = await axios.post("/auth/signup", body);
    dispatch(gotUser(user));
  } catch (error) {
    console.error(error);
  }
};

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return action.user;
    default:
      return state;
  }
};

export default reducer;
