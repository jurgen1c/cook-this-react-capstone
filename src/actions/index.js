import getDataFromApi from '../utils/request';

const filterRecipes = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

const setFilters = filters => ({
  type: 'SET_FILTERS',
  payload: filters,
});

const setRecipeList = list => ({
  type: 'SET_RECIPES',
  payload: list,
});

const setActiveRecipe = recipe => ({
  type: 'SET_ACTIVE',
  payload: recipe,
});

export const getRecipes = async (cat, hook) => {
  const list = await getDataFromApi(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  hook(setRecipeList(list.meals));
};

export const getCategories = async hook => {
  const list = await getDataFromApi('https://www.themealdb.com/api/json/v1/1/categories.php');
  hook(setFilters(list.categories));
};

export const getSingleRecipe = async (id, hook) => {
  const item = await getDataFromApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  hook(setActiveRecipe(item.meals[0]));
};

export default filterRecipes;
