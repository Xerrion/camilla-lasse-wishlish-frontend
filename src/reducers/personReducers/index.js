import { personActions } from "../../actions/personActions";

export const personReducer = (state = [], action) => {
  switch (action.type) {
    case personActions.GET_ALL:
      return action.payload;
    case personActions.GET_PERSON:
      return action.payload;
    default:
      return state;
  }
};
