import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import './recipeItem.css';

const RecipeItem = () => {
  const recipe = useSelector(state => state.recipeList.active);
  const ytLink = () => recipe.strYoutube.split('https://www.youtube.com/watch?v=');
  return (
    recipe !== null ? (
      <div>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="" />
        <h5>{`Area: ${recipe.strArea}`}</h5>
        <h5>{`Category: ${recipe.strCategory}`}</h5>
        <iframe src={`https://www.youtube.com/embed/${ytLink()[1]}`} frameBorder="0" title={recipe.strMeal} allowFullScreen />
        <div>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    ) : <Loading />
  );
};

export default RecipeItem;
