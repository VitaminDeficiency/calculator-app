import html from "../redux/core.js";
import { connect } from "../redux/store.js";

function Key({ key, pickMath, disable }) {
  return html`
    <td ${key.colspan}>
      <input
        type="button"
        value="${key.value === "*" ? "x" : key.value}"
        onclick="dispatch('${key.cal}', '${key.value}')"
        class="cal-button ${key.class} ${key.value === pickMath ? "active" : ""}
          ${key.value === disable ? "disable" : ""}"
      />
    </td>
  `;
}

export default connect()(Key);
