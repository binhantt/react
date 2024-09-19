
import { Routes, Route  ,useRoutes } from 'react-router-dom';
import Home from "./page/Home";
import Use from "../src/page/Use"
import Login from './page/Login';
const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/thong-tin-ca-nhan', element: <Use /> },
    { path : "/dang-nhap" , element: <Login/>}
  ])
  return routes;
}
export default App;
