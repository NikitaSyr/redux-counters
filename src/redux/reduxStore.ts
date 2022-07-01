import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {countersReducer} from "./countersReducer";
// import {booksSearchReducer} from "./booksSearchReducer";
// import rootSaga from "./sagas";


const rootReducer = combineReducers({
    countersPage: countersReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, undefined);

// sagaMiddleware.run(rootSaga);

export default store;