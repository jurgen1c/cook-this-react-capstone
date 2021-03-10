import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import './recipeItem.css';

const RecipeItem = () => {
  const recipe = useSelector(state => state.recipeList.active);
  const ytLink = () => recipe.strYoutube.split('https://www.youtube.com/watch?v=');
  const ingredients = () => {
    const temp = [];
    Object.keys(recipe).forEach(e => {
      if (e.includes('strIngredient') && recipe[e] !== '') {
        temp.push(recipe[e]);
      }
    });
    return temp;
  };
  const measurements = () => {
    const temp = [];
    Object.keys(recipe).forEach(e => {
      if (e.includes('strMeasure') && recipe[e] !== '') {
        temp.push(recipe[e]);
      }
    });
    return temp;
  };
  console.log(recipe);
  return (
    recipe !== null ? (
      <div>
        <div className="recipe-header flex">
          <img src={recipe.strMealThumb} alt="" />
          <div>
            <h2>{recipe.strMeal}</h2>
            <h5>{`Area: ${recipe.strArea}`}</h5>
            <h5>{`Category: ${recipe.strCategory}`}</h5>
          </div>
          <div className="flex">
            <div>
              {ingredients().map(item => <p key={item}>{item}</p>)}
            </div>
            <div>
              {measurements().map(item => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>
        <iframe src={`https://www.youtube.com/embed/${ytLink()[1]}`} frameBorder="0" title={recipe.strMeal} allowFullScreen />
        <div>
          <p>{recipe.strInstructions}</p>
          <a href={recipe.strSource} target="_blank" rel="noreferrer">Source</a>
        </div>
      </div>
    ) : <Loading />
  );
};

export default RecipeItem;
