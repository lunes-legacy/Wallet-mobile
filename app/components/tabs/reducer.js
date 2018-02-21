// Types
const types = {
  CHANGE_TAB: 'CHANGE_TAB',
};

// Initial State
const INITIAL_STATE = {
  tabSelected: 'tab1',
};

// Actions
export function changeSelectedTab(tabSelected) {
  return {
    type: types.CHANGE_TAB,
    tabSelected,
  };
}

// Reducer
export default function tabsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_TAB:
      return { tabSelected: action.tabSelected };
    default:
      return state;
  }
}
