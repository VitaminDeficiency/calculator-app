import html from "../redux/core.js";
import { connect } from "../redux/store.js";
import KeyRow from "./KeyRow.js";

function App({ eds }) {
  return html`
    <input type="text" id="eds" class="cal-display" value="${eds}" />
    <table class="cal-table">
      ${KeyRow()}
    </table>
  `;
}

export default connect()(App);
