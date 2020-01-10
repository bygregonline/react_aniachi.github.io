import { createStore } from "redux";
import {
  ADD_ROW,
  DELETE_ALL_ROWS,
  DELETE_SIMPLE_ROW,
  INCREMENT_VALUE,
  CLEAN_ROW,
  CLEAN_ALL_ROWS,
  CHANGE_CHART_TYPE,
  CHANGE_USE_CREDITS,
  CHANGE_EXPORT_CHART,
  UPDATE_CREDITS_TEXT
} from "./actions";

import aniachilogo2 from "../assets/img/aniachi_logo2.png";
import aniachilogoupdate from "../assets/img/aniachi_logo.png";

let counters = [
  { id: 1, value: 0, clean_enabled: true },
  { id: 2, value: 0, clean_enabled: true }
];

const initialState = {
  count: 5,
  counters: counters,
  titleName: "Simple name",
  cleaned_all: false,
  nav_title: "Total Rows " + counters.length,
  chart_type: "line",
  use_credits: true,
  more_road_disabled: false,
  export_chart: true,
  someAction: "aniachi",
  credits_text: "ANIACHI TECHNOLOGIES",
  credits_text_disabled: false,
  add_row_btn_txt: "Add Row",
  fav_icon: aniachilogo2
};

const max_rows = 10;

function getTotalValue(state) {
  var x = 0;
  state.forEach(c => (x += c.value));
  return x;
}

const reducer = (state = initialState, action) => {
  let x;

  switch (action.type) {
    case ADD_ROW:
      let aux = state.count + 1;
      let a = [...state.counters];

      a.push({ id: aux, value: 0 });

      return Object.assign({}, state, {
        count: aux,
        counters: a,
        nav_title: "Total Rows " + a.length,
        more_road_disabled: a.length === max_rows,
        someAction: "Add Row",
        add_row_btn_txt: a.length === max_rows ? "Max Rows" : "Add Row"
      });

    case DELETE_ALL_ROWS:
      return Object.assign({}, state, {
        count: 0,
        counters: [],
        titleName: "EMPTY PAYLOADS",
        cleaned_all: true,
        nav_title: "Total Rows 0",
        more_road_disabled: false,
        someAction: "Delete all rows",
        add_row_btn_txt: "Add Row",
        fav_icon: aniachilogo2
      });

    case DELETE_SIMPLE_ROW:
      let counters = state.counters.filter(c => c.id !== action.payload);
      x = getTotalValue(counters);

      return Object.assign({}, state, {
        counters: counters,
        titleName: "Total ITEMS =" + x,
        cleaned_all: x === 0,
        fav_icon: x === 0 ? aniachilogo2 : aniachilogoupdate,
        nav_title: "Total Rows " + counters.length,
        more_road_disabled: false,
        someAction: "Deleted a simple rows id  " + action.payload,
        add_row_btn_txt: "Add Row"
      });

    case INCREMENT_VALUE:
      let findrow = state.counters.findIndex(c => c.id === action.payload);
      state.counters[findrow].value = state.counters[findrow].value + 1;
      x = getTotalValue(state.counters);

      return Object.assign({}, state, {
        titleName: "Total ITEMS =" + getTotalValue(state.counters),
        cleaned_all: x === 0,
        someAction: "Increment value for id  " + action.payload,
        fav_icon: aniachilogoupdate
      });

    case CLEAN_ROW:
      let findCleanrow = state.counters.findIndex(c => c.id === action.payload);
      state.counters[findCleanrow].value = 0;
      x = getTotalValue(state.counters);
      return Object.assign({}, state, {
        titleName: "Total ITEMS =" + x,
        cleaned_all: x === 0,
        fav_icon: x === 0 ? aniachilogo2 : aniachilogoupdate,
        someAction: "Clean row value for id  " + action.payload
      });

    case CLEAN_ALL_ROWS:
      state.counters.forEach(c => (c.value = 0));
      return Object.assign({}, state, {
        titleName: "EMPTY PAYLOADS",
        cleaned_all: true,
        someAction: "Clean all Rows",
        fav_icon: aniachilogo2
      });

    case CHANGE_CHART_TYPE:
      return Object.assign({}, state, {
        chart_type: action.payload,
        someAction: "Change chart type " + action.payload
      });

    case CHANGE_USE_CREDITS:
      return Object.assign({}, state, {
        use_credits: action.payload,
        someAction: "Change show use credits " + action.payload,
        credits_text_disabled: !action.payload
      });

    case CHANGE_EXPORT_CHART:
      return Object.assign({}, state, {
        export_chart: action.payload,
        someAction: "Change export chart to " + action.payload
      });

    case UPDATE_CREDITS_TEXT:
      return Object.assign({}, state, {
        credits_text: action.payload,
        someAction: "Change export chart to " + action.payload
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
