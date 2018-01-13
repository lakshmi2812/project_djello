import * as Actions from "./actions";

const initialState = {
  boards: [],
  isFetching: false,
  error: null
};

export function board(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOARDS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        boards: action.data,
        isFetching: false
      };
    case Actions.GET_BOARDS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_BOARDS_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
