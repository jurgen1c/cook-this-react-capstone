import getDataFromApi from '../utils/request';

const filterRecipes = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

export const setFilters = filters => ({
  type: 'SET_FILTERS',
  payload: filters,
});

export const setRecipeList = list => ({
  type: 'SET_RECIPES',
  payload: list,
});

export const getRecipes = async (cat, hook) => {
  const list = await getDataFromApi(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  console.log(list);
  hook(setRecipeList(list.meals));
};

export const getCategories = async hook => {
  const list = await getDataFromApi('https://www.themealdb.com/api/json/v1/1/categories.php');
  hook(setFilters(list.categories));
};

export default filterRecipes;
