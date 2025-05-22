import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NewsPage from "../Pages/NewsPage/NewsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:"/",
        element: <NewsPage/>
      }
    ]
  },
]);