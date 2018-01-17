// export const GET_BOARDS_REQUEST = "GET_BOARDS_REQUEST";
// export const GET_BOARDS_SUCCESS = "GET_BOARDS_SUCCESS";
// export const GET_BOARDS_FAILURE = "GET_BOARDS_FAILURE";
//
// export function getBOARDSRequest() {
//   return {
//     type: GET_BOARDS_REQUEST
//   };
// }
//
// export function getBOARDSSuccess(data) {
//   return {
//     type: GET_BOARDS_SUCCESS,
//     data
//   };
// }
//
// export function getBOARDSFailure(error) {
//   return {
//     type: GET_BOARDS_FAILURE,
//     error
//   };
// }
//
// //Read Boards CRUD operation
// export function getInitialBOARDS(param) {
//   return dispatch => {
//     // Update the state so that it knows the request has begun
//     //just to make isFetching: true
//     dispatch(getBOARDSRequest());
//
//     fetch("http://localhost:3001/boards", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then(response => {
//         // If response not okay, throw an error
//         if (!response.ok) {
//           throw new Error(`${response.status} ${response.statusText}`);
//         }
//         // Otherwise, extract the response into json
//         console.log("response=>", response);
//         return response.json();
//       })
//       .then(json => {
//         dispatch(getBOARDSSuccess(json));
//         console.log("data from server", dispatch(getBOARDSSuccess(json)));
//       })
//       .catch(error => {
//         // Dispatch failure which sets the error in state
//         dispatch(getBOARDSFailure(error));
//       });
//   };
// }
//
// export function deleteBoard(id) {
//   return dispatch => {
//     // Update the state so that it knows the request has begun
//     dispatch(getBOARDSRequest());
//
//     fetch(`http://localhost:3001/boards/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then(response => {
//         // If response not okay, throw an error
//         if (!response.ok) {
//           throw new Error(`${response.status} ${response.statusText}`);
//         }
//         // Otherwise, extract the response into json
//         console.log("response=>", response);
//         return response.json();
//       })
//       .then(json => {
//         dispatch(getBOARDSSuccess(json));
//         console.log("data from server", dispatch(getBOARDSSuccess(json)));
//       })
//       .catch(error => {
//         // Dispatch failure which sets the error in state
//         dispatch(getBOARDSFailure(error));
//       });
//   };
// }
//
// export function createBoard(titleValue) {
//   console.log("Entering create action: ");
//   let board = { title: titleValue };
//   console.log("new board title: ", titleValue);
//   //We have to JSON.stringify(body) while sending it to server.
//   return dispatch => {
//     // Update the state so that it knows the request has begun
//     dispatch(getBOARDSRequest());
//
//     fetch("http://localhost:3001/boards/", {
//       method: "POST",
//       body: JSON.stringify({ title: titleValue }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then(response => {
//         // If response not okay, throw an error
//         if (!response.ok) {
//           throw new Error(`${response.status} ${response.statusText}`);
//         }
//         // Otherwise, extract the response into json
//         console.log("response=>", response);
//         return response.json();
//       })
//       .then(json => {
//         dispatch(getBOARDSSuccess(json));
//         console.log("data from server", dispatch(getBOARDSSuccess(json)));
//       })
//       .catch(error => {
//         // Dispatch failure which sets the error in state
//         dispatch(getBOARDSFailure(error));
//       });
//   };
// }
