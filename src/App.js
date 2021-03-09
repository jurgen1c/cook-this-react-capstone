import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:name" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
