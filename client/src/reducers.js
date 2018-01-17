import * as Actions from "./actions";

const initialState = {
  boards: [],
  lists: [],
  isFetchingBoards: false,
  isFetchingLists: false,
  error: null
};

//BOARD REDUCER
export function board(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOARDS_SUCCESS:
      //console.log("Success data in reducer", state.boards);
      return {
        ...state,
        boards: action.data,
        isFetchingBoards: false
      };
    case Actions.GET_BOARDS_REQUEST:
      return {
        ...state,
        isFetchingBoards: true,
        error: null
      };
    case Actions.GET_BOARDS_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetchingBoards: false,
        error: action.error
      };
    default:
      return state;
  }
}

//LIST REDUCER
export function list(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LISTS_SUCCESS:
      //console.log("Success data in reducer", state.boards);
      return {
        ...state,
        lists: action.data,
        isFetchingLists: false
      };
    case Actions.GET_LISTS_REQUEST:
      return {
        ...state,
        isFetchingLists: true,
        error: null
      };
    case Actions.GET_LISTS_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetchingLists: false,
        error: action.error
      };
    default:
      return state;
  }
}
