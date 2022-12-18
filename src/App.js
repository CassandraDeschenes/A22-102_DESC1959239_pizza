import { RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import ListePizza from './ListePizza';
import DetailPizza from './DetailPizza';
import Pizza from "./Pizza";
import Commande from './Commande';
import {useState } from 'react';

const App = () => {

    //---------- \\ ListePizza de bases (3 de bases) // ----------
    const [listePizza, setListePizza] = useState([
        {
            nomPizza: 'La Classique',
            ingredients: [
                { nomIngredient: "Mozarella", photoUrl: "/images/Mozarella-1.png", montant: 1 },
                { nomIngredient: "Pepperonni", photoUrl: "/images/Pepperoni.png", montant: 2 },
                { nomIngredient: "Olives Noires", photoUrl: "/images/OlivesNoires.png", montant: 0.40 },
            ],
            total: 13.40,
            quantite:0
        },
        {
            nomPizza: 'Toute garnie',
            ingredients: [
                { nomIngredient: "Mozarella", photoUrl: "/images/Mozarella-1.png", montant: 1 },
                { nomIngredient: "Pepperonis", photoUrl: "/images/Pepperoni.png", montant: 2 },
                { nomIngredient: "Poivrons", photoUrl: "/images/Poivrons.png", montant: 0.65 },
                { nomIngredient: "Champignons", photoUrl: "/images/Champigons.png", montant: 0.75 } ,
                { nomIngredient: "Olives Noires", photoUrl: "/images/OlivesNoires.png", montant: 0.40 },
            ],
            total: 14.80,
            quantite:0
        },{
            nomPizza: 'Hawainenne',
            ingredients: [
                { nomIngredient: "Mozarella", photoUrl: "/images/Mozarella-1.png", montant: 1 },
                { nomIngredient: "Jambon", photoUrl: "/images/Jambon.png", montant: 0.75 },
                { nomIngredient: "Ananas", photoUrl: "/images/Ananas.png", montant: 0.30 },
                { nomIngredient: "Olives Noires", photoUrl: "/images/OlivesNoires.png", montant: 0.40 },
            ],
            total: 12.45,
            quantite: 0
        }
    ]);

    // ---------- \\ Tableau des indgrédients disponibles // ----------
    const [ingredients, setIngredients] = useState([
        {
            nomIngredient: 'Mozarella',
            photoUrl: '/images/Mozarella-1.png',
            montant: 1,
            checked: false,
            categorie: 'Fromage',

        },
        {
            nomIngredient: 'Cheddar',
            photoUrl: '/images/Cheddar.png',
            montant: 1.95,
            checked: false,
            categorie: 'Fromage',
        },
        {
            nomIngredient: 'Pepperoni',
            montant: 2,
            photoUrl: '/images/Pepperoni.png',
            checked: false,
            categorie: 'Viande',

        },
        {
            nomIngredient: 'Jambon',
            photoUrl: '/images/Jambon.png',
            montant: 0.75,
            checked: false,
            categorie: 'Viande',
        },
        {
            nomIngredient: 'Baccon',
            photoUrl: '/images/Baccon.png',
            montant: 1.10,
            checked: false,
            categorie: 'Viande',
        },
        {
            nomIngredient: 'Saucisses',
            photoUrl: '/images/Saucisses.png',
            montant: 1.50,
            checked: false,
            categorie: 'Viande',
        },
        {
            nomIngredient: 'Anchois',
            photoUrl: '/images/Anchois.png',
            montant: 2.25,
            checked: false,
            categorie: 'Viande',
        },
        {
            nomIngredient: 'Feta',
            photoUrl: '/images/Feta.png',
            montant: 1,
            checked: false,
            categorie: 'Fromage',
        },
        {
            nomIngredient: 'Poivrons',
            photoUrl: '/images/Poivrons.png',
            montant: 0.65,
            checked: false,
            categorie: 'Légume',
        },
        {
            nomIngredient: 'Ananas',
            photoUrl: '/images/Ananas.png',
            montant: 0.30,
            checked: false,
            categorie: 'Légumes',
        },
        {
            nomIngredient: 'Olives Noires',
            photoUrl: '/images/OlivesNoires.png',
            montant: 0.40,
            checked: false,
            categorie: 'Légume',
        },
        {
            nomIngredient: 'Olives Vertes',
            photoUrl: '/images/OlivesVertes.png',
            montant: 0.40,
            checked: false,
            categorie: 'Légume',
        },
        {
            nomIngredient: 'Epinard',
            photoUrl: '/images/Epinards.png',
            montant: 1.45,
            checked: false,
            categorie: 'Légume',
        },
        {
            nomIngredient: 'Champignons',
            photoUrl: '/images/Champignons.png',
            montant: 0.75,
            checked: false,
            categorie: 'Légume',
        }
    ]);


    // ---------- \\ Repérage des items cochés // ----------

    const [nomPizza, setnomPizza] = useState('');
    const elementsCoche = ingredients.filter(current => current.checked).map(current => current);


    // ---------- \\ Authentification // ----------
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //Récupération du nom de l'utilisateur
    const [userName, setUserName] = useState('');
    const nameHandler = e => {
        setUserName(e.target.value);
    }


    // ---------- \\ Création d'une pizza // ----------

    //Récupération du nom de la pizza
    const handleNomPizza = e => {           
        setnomPizza(e.target.value);
    }

    //Enregistrement des valeurs cochées
    const UpdateIngredients = (index) => {
        setIngredients(ingredients.map((current) =>  
            current.nomIngredient === index 
                ? { ...current, checked: !current.checked }               
                : current))                                               
    };

    //Enregistrements de la nouvelle pizza et la place dans la liste des pizzas disponibles
    const sauvegarderPizza = () => {
        setListePizza((current) => [...current, {
            nomPizza: nomPizza,
            ingredients: elementsCoche,
            total: prix,
        }]);
    }

    //Calcul du prix d'une pizza selon les ingrédients cochés
    const prix = elementsCoche.reduce(
        (total, item) => total + item.montant,
        10                                       
    );



    // ---------- \\ Routes de l'application // ----------

    //Si l'utilisateur est identifié, il peut accéder aux routes suivantes
    const routes = isAuthenticated ? (
        [
            {

                path: '/',
                element: <Layout/>,
                children: [{
                    path: 'pizza',
                    element: <ListePizza listePizza={listePizza} elementsCoche={elementsCoche} />,
                    children: [{
                        path: ':pizza',
                        element: <DetailPizza
                            elementsCoche={elementsCoche}
                            listePizza={listePizza}

                        />,
                        errorElement: <Navigate to="/pizza" replace />,
                    }]
                }, {
                    // ---------- \\ Création de pizza // ----------
                    path: '/pizza/creer',
                    element: <Pizza ingredients={ingredients} UpdateIngredientsFn={UpdateIngredients} nomPizza={nomPizza} handleNomPizzaFn={handleNomPizza} sauvegarderPizzaFn={() => sauvegarderPizza()} prix={prix} elementsCoche={elementsCoche} listePizza={listePizza}/>
                }, {
                    path: '*',
                    element: <Navigate to="/pizza" />
                }, 
                {
                    // ---------- \\ Commande // ----------
                    path: '/commande',
                    element: <Commande 
                        listePizza={listePizza}
                        nomPizza={nomPizza}
                        prix={prix}
                    />
                },
                // {
                //     // ---------- \\ Panier // ----------
                //     path: '/panier',
                //     element: <Panier itemsPanier={itemsPanier} onAdd={onAdd} onRemove={onRemove} />
                //  }
                ]

            }
        ]
    )
        : [
            // si l'utilisateur n'est pas identifié, il n'a accès qu'à la page login
            {
                path: '/login',
                element: <Login
                    authFn={setIsAuthenticated}
                    isAuth={nameHandler}
                />,
            }, {
                path: "/*",
                element: <Navigate to="/login" replace />
            }
        ];

    return (
        <RouterProvider router={createBrowserRouter(routes)} />
    );
}

export default App;