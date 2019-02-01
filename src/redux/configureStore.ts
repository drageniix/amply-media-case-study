import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonReducerCreator from './reducers/common';

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default async (isServer?: boolean) => {
    const commonReducer = commonReducerCreator();

    const reducer = combineReducers({
        common: commonReducer
    });

    let store;
    if (isServer && typeof window === 'undefined') {
        store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    } else {
        store = (window as any).store
            ? (window as any).store
            : ((window as any).store = createStore(
                  reducer,
                  composeEnhancers(applyMiddleware(thunk))
              ));
    }

    return store;
};
