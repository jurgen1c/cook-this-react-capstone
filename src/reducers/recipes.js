const initialRecipeState = {
  recipes: ['Loading'],
};

const recipeReducer = (state = initialRecipeState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
