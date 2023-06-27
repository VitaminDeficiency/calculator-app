import html from "../redux/core.js";
import { connect } from "../redux/store.js";
import Key from "./Key.js";

function KeyRow({ keys_row_1, keys_row_2, keys_row_3, keys_row_4 }) {
  return html`
    <tr>
      ${keys_row_1.map((key) => Key({ key }))}
    </tr>
    <tr>
      ${keys_row_2.map((key) => Key({ key }))}
    </tr>
    <tr>
      ${keys_row_3.map((key) => Key({ key }))}
    </tr>
    <tr>
      ${keys_row_4.map((key) => Key({ key }))}
    </tr>
  `;
}

export default connect()(KeyRow);
