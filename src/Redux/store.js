import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { classesReducer } from "./Classes/reducer";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";
import { teachersReducer } from "./Teachers/reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    teachers: teachersReducer ,
    classes: classesReducer,
    register: registerReducer
})

const middleware=[thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export const store = createStore(rootReducer,enhancer);

