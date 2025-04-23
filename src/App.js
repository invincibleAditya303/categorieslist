import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/LoginForm'
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';
import Categories from './components/Categories';
import CategoryItemUpdate from './components/CategoryItemUpdate';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <ProtectedRoute exact path='/categories' component={Categories} />
      <ProtectedRoute exact path='/categories/:categoryId' component={CategoryItemUpdate} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
