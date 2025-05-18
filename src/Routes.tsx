import {Route} from './lib/Router';
import Login from './pages/Login';
import Home from './pages/Home';

export const routes: Route[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
];
