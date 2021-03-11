const initialFilterState = {
  current: 'Dessert',
  list: [],
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
    case 'SET_FILTERS':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
