import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './actions';
import './App.css';
import Navbar from './components/navbar/Navbar';
import RecipeItem from './components/recipe/RecipeItem';
import RecipeList from './components/recipeList/RecipeList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(dispatch);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/:name" component={RecipeItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
