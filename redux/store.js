import { createStore } from "../redux/core.js";
import reducer from "../redux/reducer.js";

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch;

export { attach, connect };
