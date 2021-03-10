import './category.css'
const CategoryFilter = ({handleChange, categories}) => {
  return (
      <select name="categories" onChange={handleChange}>
        <option selected disabled>Select a category</option>
        {categories.map(item => <option key={`${item.strCategory}_option`} value={item.strCategory}>{item.strCategory}</option>)}
      </select>
  )
}


CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default CategoryFilter
