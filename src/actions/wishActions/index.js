import { api } from "../../apis";

export const wishActions = {
  GET_ALL: "GET_ALL"
};

export const getWishes = () => dispatch => {
  api
    .get("/wishes")
    .then(response =>
      dispatch({ type: wishActions.GET_ALL, payload: response.data })
    );
};
