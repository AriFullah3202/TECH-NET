import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import App from "../App";

export const routes = createBrowserRouter([

 
  {
    path: "/home",
    element: <Home />,
  },
  {
    path : '/login'
    ,
    element : <Login></Login>
  },
  {
    path : '*',
    element : <NotFound></NotFound>
  },
  {
    path : '/',
    element : <App></App>
  }
]);
