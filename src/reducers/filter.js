const initialFilterState = {
  current: 'All',
};

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      const current = action.payload;

      const result = {
        ...state,
        current,
      };
      return result; }
    default:
      return state;
  }
};

export default filterReducer;