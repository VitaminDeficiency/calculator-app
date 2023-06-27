import html from "../redux/core.js";
import { connect } from "../redux/store.js";
import KeyRow from "./KeyRow.js";

function App({ edu, eds }) {
  return html`
    <input type="text" id="edu" class="cal-display" value="${edu}" />
    <input type="text" id="eds" class="cal-display-sol" value="${eds}" />
    <table class="cal-table">
      ${KeyRow()}
    </table>
  `;
}

export default connect()(App);
