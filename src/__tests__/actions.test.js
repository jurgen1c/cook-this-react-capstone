import filterRecipes, { setFilters, setRecipeList, setActiveRecipe } from '../actions/index';

describe('Redux Actions', () => {
  it(
    '1. Checks the return of the filterRecipes action',
    () => {
      const action = filterRecipes('newFilter');
      expect(action.payload).toBe('newFilter');
      expect(action.type).toBe('CHANGE_FILTER');
    },
  );

  it(
    '2. Checks the return of the setFilters action',
    () => {
      const action = setFilters([
        {
          strCategory: 'Cat',
        },
        {
          strCategory: 'Cat1',
        },
      ]);
      expect(action.payload).toStrictEqual([
        {
          strCategory: 'Cat',
        },
        {
          strCategory: 'Cat1',
        },
      ]);
      expect(action.type).toBe('SET_FILTERS');
    },
  );

  it(
    '3. Checks the return of the setRecipeList action',
    () => {
      const action = setRecipeList([
        {
          idMeal: '1',
          strMeal: 'Meal',
          strMealThumb: 'meal image',
        },
        {
          idMeal: '2',
          strMeal: 'Meal1',
          strMealThumb: 'meal image1',
        },
      ]);
      expect(action.payload).toStrictEqual([
        {
          idMeal: '1',
          strMeal: 'Meal',
          strMealThumb: 'meal image',
        },
        {
          idMeal: '2',
          strMeal: 'Meal1',
          strMealThumb: 'meal image1',
        },
      ]);
      expect(action.type).toBe('SET_RECIPES');
    },
  );

  it(
    '4. Checks the return of the setActiveRecipe action',
    () => {
      const action = setActiveRecipe({
        strMeal: 'Meal',
        strArea: 'british',
      });
      expect(action.payload).toStrictEqual({
        strMeal: 'Meal',
        strArea: 'british',
      });
      expect(action.type).toBe('SET_ACTIVE');
    },
  );
});
