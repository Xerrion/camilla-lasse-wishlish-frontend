import { api } from "../../apis";

export const personActions = {
  GET_ALL: "GET_ALL",
  GET_PERSON: "GET_PERSON"
};

export const getPersons = () => dispatch => {
  api
    .get("/persons/")
    .then(response =>
      dispatch({ type: personActions.GET_ALL, payload: response.data.persons })
    );
};

export const getPerson = personId => dispatch => {
  api
    .get("/persons/" + personId)
    .then(response =>
      dispatch({ type: personActions.GET_PERSON, payload: response.data })
    );
};
