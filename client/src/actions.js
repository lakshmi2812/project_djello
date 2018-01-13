export const GET_BOARDS_REQUEST = "GET_BOARDS_REQUEST";
export const GET_BOARDS_SUCCESS = "GET_BOARDS_SUCCESS";
export const GET_BOARDS_FAILURE = "GET_BOARDS_FAILURE";

export function getBOARDSRequest() {
  return {
    type: GET_BOARDS_REQUEST
  };
}

export function getBOARDSSuccess(data) {
  return {
    type: GET_BOARDS_SUCCESS,
    data
  };
}

export function getBOARDSFailure(error) {
  return {
    type: GET_BOARDS_FAILURE,
    error
  };
}

export function getInitialBOARDS(param) {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getBOARDSRequest());

    fetch("http://localhost:3001/api", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        console.log("response=>", response);
        return response.json();
      })
      .then(json => {
        dispatch(getBOARDSSuccess(json));
        console.log("data from server", dispatch(getBOARDSSuccess(json)));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getBOARDSFailure(error));
      });
  };
}
