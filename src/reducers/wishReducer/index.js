import { wishActions } from "../../actions/wishActions";

export const wishReducer = (state = [], action) => {
  switch (action.type) {
    case wishActions.GET_ALL:
      return action.payload;
    case wishActions.GET_WISH:
      return action.payload;
    default:
      return state;
  }
};
