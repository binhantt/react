
import { Routes, Route  ,useRoutes } from 'react-router-dom';
import Home from "./page/Home";
import Use from "../src/page/Use"
import Login from './page/Login';
import AdminHome from './components/Admin/Home';
import AccountSettings from './components/Admin/AccountSettings/Header'; 
import Dashboard from './components/Admin/Dashboard/Header'
const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/thong-tin-ca-nhan', element: <Use /> },
    { path : "/dang-nhap" , element: <Login/>}, 
    {path : "/admin",  element: < AdminHome/>,
      children:[ 
        {path : "" ,element :<Dashboard/> },
        {path : "account-settings" , element :<AccountSettings/> }
      ]
    } 
  ])
  return routes;
}
export default App;
