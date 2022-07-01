import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {countersReducer} from "./countersReducer";
import rootSaga from "./sagas";


const rootReducer = combineReducers({
    countersPage: countersReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;