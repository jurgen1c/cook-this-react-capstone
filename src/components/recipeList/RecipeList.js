import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import filterRecipes, { getRecipes } from '../../actions';
import ListItem from '../listItem/ListItem';
import './recipeList.css';

const RecipeList = () => {
  const list = useSelector(state => state.recipeList.recipes);
  const categories = useSelector(state => state.filter.list);
  const current = useSelector(state => state.filter.current);
  const dispatch = useDispatch();
  useEffect(() => {
    getRecipes(current, dispatch);
  }, [current]);

  const handleClick = () => {
    getRecipes('Seafood', dispatch);
  };

  const handleChange = ({ target: { value } }) => {
    dispatch(filterRecipes(value))
  };

  return (
    <div>
      <h1>Welcome to cook this! First choose the type of meal you want to prepare.</h1>
      <select name="chooseType" id="choose-T" onChange={handleChange}>
        {categories.map(item => <option key={`${item.strCategory}_${Math.random() * 100}`} value={item.strCategory}>{item.strCategory}</option>)}
      </select>
      {list ? list.map(item => <ListItem key={`${item.strMeal}_${Math.random() * 100}`} meal={item} handleClick={handleClick}/>) : 'Opps no meals here' }
    </div>
  );
};

export default RecipeList;
