import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './actions';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';
import Recipe from './pages/Recipe';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(dispatch);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
