import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import filterRecipes, { getRecipes } from '../../actions';
import ListItem from '../listItem/ListItem';
import Loading from '../loading/Loading';
import './recipeList.css';

const RecipeList = () => {
  const [loaded, setLoaded] = useState(false);
  const list = useSelector(state => state.recipeList.recipes);
  const categories = useSelector(state => state.filter.list);
  const current = useSelector(state => state.filter.current);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoaded(false);
    getRecipes(current, dispatch)
      .then(setLoaded(true));
  }, [current]);

  const handleClick = () => {
    getRecipes('Seafood', dispatch);
  };

  const handleChange = ({ target: { value } }) => {
    dispatch(filterRecipes(value));
  };

  return (
    <div>
      <h1>Welcome to cook this!</h1>
      <h3>First choose the type of meal you want to prepare</h3>
      <select name="chooseType" id="choose-T" onChange={handleChange}>
        {categories.map(item => <option key={`${item.strCategory}_${Math.random() * 100}`} value={item.strCategory}>{item.strCategory}</option>)}
      </select>
      {loaded ? list.map(item => <ListItem key={`${item.strMeal}_${Math.random() * 100}`} meal={item} dispatch={dispatch} handleClick={handleClick} />) : <Loading /> }
    </div>
  );
};

export default RecipeList;
