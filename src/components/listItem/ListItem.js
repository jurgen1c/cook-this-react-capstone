import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ meal }) => (
  <div className="list-item">
    <img src={meal.strMealThumb} alt="meal-thumb" style={{ width: '50px', height: '50px' }} />
    <div>
      <h2>{meal.strMeal}</h2>
      <button type="button">Add To Favorites</button>
      <Link to={`/${meal.idMeal}`}>Start Cooking</Link>
    </div>
  </div>
);

ListItem.propTypes = {
  meal: PropTypes.exact(
    {
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    },
  ).isRequired,
};

export default ListItem;
