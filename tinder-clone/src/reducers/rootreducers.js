import { combineReducers } from "redux";
import authreducer from "./authreducers";
import errorreducer from "./errorreducers";

const rootreducer = combineReducers({
  auth: authreducer,
  errors: errorreducer
});
export default rootreducer;