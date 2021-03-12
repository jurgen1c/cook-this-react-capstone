import './category.css';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleChange, categories }) => (
  <select name="categories" onChange={handleChange} defaultValue="default">
    <option value="default" disabled>Select a category</option>
    {categories.map(item => <option key={`${item.strCategory}_option`} value={item.strCategory}>{item.strCategory}</option>)}
  </select>
);

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
