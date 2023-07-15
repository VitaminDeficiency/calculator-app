import html from "../redux/core.js";
import { connect } from "../redux/store.js";
import KeyRow from "./KeyRow.js";

function App({ screen }) {
  return html`
    <input type="text" id="eds" class="cal-display" value="${screen}" />
    <table class="cal-table">
      ${KeyRow()}
    </table>
  `;
}

export default connect()(App);
