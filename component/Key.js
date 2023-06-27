import html from "../redux/core.js";
import { connect } from "../redux/store.js";

function Key({ key }) {
  return html`
    <td>
      <input
        type="button"
        value="${key.value === "*" ? "x" : key.value}"
        onclick="dispatch('${key.cal}', '${key.value}')"
        class="cal-button ${key.class}"
      />
    </td>
  `;
}

export default connect()(Key);
