import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import roomsReducer from "./roomsSlice";

export default combineReducers({
  usersReducer,
  roomsReducer
});
