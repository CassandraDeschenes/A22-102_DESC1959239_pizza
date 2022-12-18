import { motion } from "framer-motion";
import { useParams} from "react-router-dom";
import './css/DetailsPizza.css';


const DetailPizza = ({ handleClick, listePizza, pageFn, elementsCoche }) => {
    
    // Récupération des paramètres pour l'affichage des détails d'une pizza 
    const params = useParams();
    const listes = listePizza[params.pizza - 1];


    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="pageDetails">
                <fieldset>
                    <legend>Détails de la pizza</legend>
                    <div className="infosPizza">
                        <h1 className="nomDePizza">{listes.nomPizza}</h1>
                        <div className="ingredientsDePizza">{listes.ingredients[listes.nom]}
                            <img className="baseDetailsPizza" src="../images/basePizza.png" alt="basePizza" />
                            {
                                listePizza.map((a) => {
                                                return (a.ingredients.map((b) => {
                                                    return (
                                                        <img key={b.nomIngredient} src={b.photoUrl} alt={b.nomIngredient} className="imageIngrePizza"/>
                                                    )
                                                }))
                                            })

                            }
                        </div>
                        <div className="ingreBtn">
                            <fieldset className="listeIngrePizza">
                                <legend>Liste des ingrédients de la pizza</legend>
                                <ul className="listeIngredientsDetails">
                                    {
                                        listePizza.map((a) => {
                                                return (a.ingredients.map((b) => {
                                                    return (
                                                        <li>{b.nomIngredient}</li>
                                                    )
                                                }))
                                            })

                                    }
                                </ul>
                            </fieldset>
                            <div className="boutonAjouter">
                                <button className="btnAjouter" onClick={() => handleClick(listes)}>Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="totalDePizza">{listes.total.toFixed(2) + " $"}</div>
                    </div>
                </fieldset>
            </div>
        </motion.div>
    );
}

export default DetailPizza;