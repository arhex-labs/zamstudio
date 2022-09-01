import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { login } from './redux/login';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const {token} = useSelector((state) => state.login)
  if(token === ""){
  return <Login />
  } else {
    return <Dashboard />
  }
}

export default App;
