const initialRecipeState = {
  recipes: [],
  active: null,
};

const recipeReducer = (state = initialRecipeState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
      };
    case 'SET_ACTIVE':
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
