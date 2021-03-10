const initialFavState = {
  favorites: [],
};

const favReducer = (state = initialFavState, action) => {
  switch (action.type) {
    case 'CREATE_FAVORITE':
      return {
        booklist: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE': {
      const favorites = state.favorites.filter(item => item.id !== action.payload.id);

      const result = {
        ...state,
        favorites,
      };
      return result;
    }
    default:
      return state;
  }
};

export default favReducer;
