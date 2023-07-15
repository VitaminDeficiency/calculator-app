const calculator = {
  keys_row_1: [
    { value: "AC", class: "cal-function", cal: "clrBtn" },
    { value: "DEL", class: "cal-function", cal: "deleteBtn" },
    { value: "00", class: "cal-function", cal: "keyValueImportBtn" },
    { value: "/", class: "cal-math", cal: "addMathToEqualsBtn" },
  ],
  keys_row_2: [
    { value: "7", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "8", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "9", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "*", class: "cal-math", cal: "addMathToEqualsBtn" },
  ],
  keys_row_3: [
    { value: "4", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "5", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "6", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "-", class: "cal-math", cal: "addMathToEqualsBtn" },
  ],
  keys_row_4: [
    { value: "1", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "2", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "3", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "+", class: "cal-math", cal: "addMathToEqualsBtn" },
  ],
  keys_row_5: [
    {
      value: "0",
      class: "cal-number cal-button-zero",
      cal: "keyValueImportBtn",
      colspan: "colspan = '2'",
    },
    { value: ".", class: "cal-number", cal: "keyValueImportBtn" },
    { value: "=", class: "cal-sol", cal: "displayResult" },
  ],
  screen: "0",
  pickMath: "",
  disable: "DEL",
};

const actions = {
  disValue: "0",
  equals: "",
  addMath: "",
  isMathSign: false,
  isPressedSign: false,
  isDisplayed: false,

  deleteBtn() {
    if (this.isImp) {
      this.disValue = this.disValue.toString().slice(0, -1);
      if (this.disValue === "" || this.disValue === "0") this.clrBtn();
      this.display(this.disValue);
    }
  },

  keyValueImportBtn(_, value) {
    if (value == 0) {
      this.delBtnActive(false);
    } else this.delBtnActive(true);

    this.addValue0WhenNothingOnScreen();
    this.addMathSignAndAllowSelect();
    this.importValue(_, value);
    this.displayToScreen(this.disValue);
  },

  addMathToEqualsBtn(_, value) {
    this.addMath = value;
    calculator.pickMath = this.addMath;
    this.delBtnActive(false);
    this.checkMathAndDisplay();
  },

  clrBtn() {
    this.disValue = "0";
    this.equals = "";
    this.addMath = "";
    this.isMathSign = false;
    this.isPressedSign = false;
    this.isDisplayed = false;
    this.delBtnActive(false);
    this.displayToScreen();
  },

  importValue(_, value) {
    if (this.disValue === "0") {
      if (this.valueBelongs1to9(value)) {
        this.disValue = value;
      } else if (value === "0" || value === "00") {
        this.disValue = this.disValue;
      } else {
        this.disValue += value;
      }
    } else {
      this.disValue += value;
    }
  },

  displayResult() {
    if (!this.isPressedSign) {
      this.equals += this.disValue;
      this.isPressedSign = true;
    } else {
      this.equals = this.disValue;
    }
    this.disValue = this.equals;
    this.equals = this.equalToResult(this.equals);
    this.displayToScreen(this.equals);
    this.isDisplayed = true;
    this.delBtnActive(false);
  },

  displayToScreen(value = 0) {
    calculator.screen = value;
  },

  equalToResult(value) {
    if (this.checkEquals(value)) {
      let x = eval(value);
      return parseFloat(x.toPrecision(7)).toString();
    }
  },

  delBtnActive(activeDELBtn = true) {
    if (activeDELBtn) {
      calculator.disable = "";
      this.isImp = true;
    } else {
      calculator.disable = "DEL";
      this.isImp = false;
    }
  },

  valueBelongs1to9(value) {
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
      return true;
    } else return false;
  },

  checkEquals(expression) {
    try {
      eval(expression);
      return true;
    } catch {
      return false;
    }
  },

  checkMathAndDisplay() {
    if (!this.isMathSign) {
      this.displayResult();
      this.isMathSign = true;
      this.isPressedSign = false;
    }
  },

  addValue0WhenNothingOnScreen() {
    if (this.isDisplayed) {
      this.disValue = "0";
      this.isDisplayed = false;
    }
  },

  addMathSignAndAllowSelect() {
    if (this.isMathSign) {
      this.equals += this.addMath;
      this.isMathSign = false;
      calculator.pickMath = "";
    }
  },
};

export default function reducer(state = calculator, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
