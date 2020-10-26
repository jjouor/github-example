import { createStore } from "redux";
import { rootReducer } from "./search";
export const store = createStore(rootReducer);
