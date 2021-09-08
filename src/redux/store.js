import {createStore} from "redux";
import deckReducer from "./reducers/Deck";

const store = createStore(deckReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

export default store