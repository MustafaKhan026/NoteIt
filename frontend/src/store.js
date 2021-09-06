import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateRducer,
} from "./reducers/userReducers";
import {
  noteDeleteReducer,
  notesCreateReducer,
  notesListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducer";

const reducer = combineReducers({
  // this will contain all the reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateRducer,
  noteList: notesListReducer,
  noteCreate: notesCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
