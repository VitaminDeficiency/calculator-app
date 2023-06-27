const init = {
  keys_row_1: [
    { value: "=", class: "cal-sol", cal: "sol" },
    { value: "c", class: "cal-function", cal: "clr" },
    { value: "/", class: "cal-function", cal: "dis" },
    { value: "%", class: "cal-function", cal: "dis" },
  ],
  keys_row_2: [
    { value: "+", class: "cal-function", cal: "dis" },
    { value: "1", class: "", cal: "dis" },
    { value: "2", class: "", cal: "dis" },
    { value: "3", class: "", cal: "dis" },
  ],
  keys_row_3: [
    { value: "-", class: "cal-function", cal: "dis" },
    { value: "4", class: "", cal: "dis" },
    { value: "5", class: "", cal: "dis" },
    { value: "6", class: "", cal: "dis" },
  ],
  keys_row_4: [
    { value: "*", class: "cal-function", cal: "dis" },
    { value: "7", class: "", cal: "dis" },
    { value: "8", class: "", cal: "dis" },
    { value: "9", class: "", cal: "dis" },
  ],
  edu: "",
  eds: "",
};

const actions = {
  dis(_, value) {
    init.edu += value;
  },
  sol() {
    let x = init.edu;
    let y = eval(x);
    init.eds = y;
  },
  clr() {
    init.edu = "";
    init.eds = "";
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
