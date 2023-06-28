const init = {
  keys_row_1: [
    { value: "AC", class: "cal-function", cal: "clr" },
    { value: "DEL", class: "cal-function", cal: "del" },
    { value: "00", class: "cal-function", cal: "impr" },
    { value: "/", class: "cal-math", cal: "impr" },
  ],
  keys_row_2: [
    { value: "7", class: "cal-number", cal: "dis_key" },
    { value: "8", class: "cal-number", cal: "dis_key" },
    { value: "9", class: "cal-number", cal: "dis_key" },
    { value: "*", class: "cal-math", cal: "impr" },
  ],
  keys_row_3: [
    { value: "4", class: "cal-number", cal: "dis_key" },
    { value: "5", class: "cal-number", cal: "dis_key" },
    { value: "6", class: "cal-number", cal: "dis_key" },
    { value: "-", class: "cal-math", cal: "impr" },
  ],
  keys_row_4: [
    { value: "1", class: "cal-number", cal: "dis_key" },
    { value: "2", class: "cal-number", cal: "dis_key" },
    { value: "3", class: "cal-number", cal: "dis_key" },
    { value: "+", class: "cal-math", cal: "equ_add" },
  ],
  keys_row_5: [
    {
      value: "0",
      class: "cal-number cal-button-zero",
      cal: "dis_key",
      colspan: "colspan = '2'",
    },
    { value: ".", class: "cal-number", cal: "dis_key" },
    { value: "=", class: "cal-sol", cal: "dis_sol" },
  ],
  edu: "",
  eds: "0",
};

const actions = {
  disValue: "",
  equals: "",
  resultValue: "",
  imp(_, value) {
    if (this.equals === "0") {
      if (
        value == 1 ||
        value == 2 ||
        value == 3 ||
        value == 4 ||
        value == 5 ||
        value == 6 ||
        value == 7 ||
        value == 8 ||
        value == 9
      ) {
        this.equals = value;
      } else if (value === "0" || value === "00") {
        this.equals = this.equals;
      } else {
        this.equals += value;
      }
    } else {
      this.equals += value;
    }
  },
  sol() {
    function check(expression) {
      try {
        eval(expression);
        return true;
      } catch {
        return false;
      }
    }
    if (check(this.equals)) {
      let x = this.equals;
      let y = eval(x);
      this.resultValue = y;
    }
  },
  dis_sol() {},
  dis_key(_, value) {
    this.imp(_, value);
    this.dis_eds();
  },
  equ_add(_, value) {
    this.sol();
    this.equals = this.resultValue;
    this.imp(_, value);
    this.dis_edu();
  },
  dis_edu() {
    if (this.equals == 0) {
      init.edu = "";
    } else init.edu = this.equals;
  },
  dis_eds() {
    init.eds = this.equals;
  },
  clr() {
    this.equals = "0";
    this.resultValue = "0";
    this.dis_edu();
    this.dis_eds();
  },
  del() {
    init.eds = init.eds.toString().slice(0, -1);
    init.eds === "" && this.clr();
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
