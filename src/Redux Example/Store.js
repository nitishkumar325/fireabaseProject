import {createStore,applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./Reducer/Reducer";
const enhancer = compose(applyMiddleware(thunk, logger));
const store= createStore(Reducer,enhancer)
export default store

