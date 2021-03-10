import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSingleRecipe } from '../../actions';
import './listItem.css';

const ListItem = ({ meal, dispatch }) => {
  const handleChoice = () => {
    getSingleRecipe(meal.idMeal, dispatch);
  };

  return (
    <div className="list-item">
      <img src={meal.strMealThumb} alt="meal-thumb" style={{ width: '50px', height: '50px' }} />
      <div>
        <h2>{meal.strMeal}</h2>
        <Link to={`/${meal.strMeal.toLowerCase()}`} onClick={handleChoice}> Start Cooking</Link>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  meal: PropTypes.exact(
    {
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    },
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ListItem;
