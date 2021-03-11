import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import './recipeItem.css';

const RecipeItem = () => {
  const recipe = useSelector(state => state.recipeList.active);
  const ytLink = () => recipe.strYoutube.split('https://www.youtube.com/watch?v=');
  const ingredients = () => {
    const temp = [];
    Object.keys(recipe).forEach(e => {
      if (e.includes('strIngredient') && recipe[e] !== '' && recipe[e] !== null) {
        temp.push(recipe[e]);
      }
    });
    return temp;
  };
  const measurements = () => {
    const temp = [];
    Object.keys(recipe).forEach(e => {
      if (e.includes('strMeasure') && recipe[e] !== '' && recipe[e] !== null) {
        temp.push(recipe[e]);
      }
    });
    return temp;
  };
  return (
    recipe !== null ? (
      <div className="recipe-cont">
        <h1>{recipe.strMeal}</h1>
        <div className="recipe-header flex">
          <img src={recipe.strMealThumb} alt="" />
          <div>
            <h5>{`Area: ${recipe.strArea}`}</h5>
            <h5>{`Category: ${recipe.strCategory}`}</h5>
            <div className="flex">
              <div className="list-wrap">
                <h3>Ingredients</h3>
                {ingredients().map(item => <p key={`${item}_${Math.random() * 100}`}>{item}</p>)}
              </div>
              <div className="list-wrap">
                <h3>Measurements</h3>
                {measurements().map(item => <p key={`${item}_${Math.random() * 100}`}>{item}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className="inst-wrap">
          <iframe src={`https://www.youtube.com/embed/${ytLink()[1]}`} frameBorder="0" title={recipe.strMeal} allowFullScreen />
          <p>{recipe.strInstructions}</p>
          {recipe.strSource ? <a href={recipe.strSource} className="btn">Source</a> : ''}
        </div>
      </div>
    ) : <Loading />
  );
};

export default RecipeItem;
