import './recipeItem.css';

const RecipeItem = () => {
  const recipe = useSelector(state => state.recipeList.active)
  return (
    <div>
      <h2>This is a recipe</h2>
    </div>
  )
};

export default RecipeItem;
