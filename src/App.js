import {RouterProvider, createBrowserRouter, Navigate, Route, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout';
import Accueil from './Accueil';
import Login from './Login';
import ListePizza from './ListePizza';
import DetailPizza from './DetailPizza';
import Creer from "./Pizza";
import Commande from './Commande';

const App = () => {

    const routes = createRoutesFromElements(
        <>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Accueil/>} />
                <Route path="login" element={<Login/>} />
                <Route path="listePizza" element={<ListePizza/>} />
                <Route path="pizza/pizza" element={<DetailPizza/>} />
                <Route path="creer" element={<Creer/>} />
                <Route path="commande" element={<Commande/>} />
                <Route path="*" element={<Navigate to="/" replace/>} />
            </Route>
        </>
      );
    return(
        <RouterProvider router={createBrowserRouter(routes)} />
    );
}

export default App;