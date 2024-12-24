import Firstcomp from "./Components/Pages/Firstcomp/Firstcomp";
import Login from "./Components/Pages/Menu/Login";
import Products from "./Components/Pages/Products/Products";
import Error from "./Components/Pages/Error404/Error";
import Singleproducts from "./Components/Pages/Products/Singleproducts";
import Contact from "./Components/Pages/Contact/Contact";
import User from "./Components/Pages/Menu/User";

let routes =[
    {path : '/digiland', element:<Firstcomp />},
    {path : '/login', element:<Login />},
    {path : '/Contact', element:<Contact />},
    {path : '/Products', element:<Products />},
    {path : '/Products/:id', element:<Singleproducts />},
    {path : '/User', element:<User />},
    {path : '*', element:<Error />},
]

export default routes;