import './css/Pizza.css';

import { useNavigate} from 'react-router-dom';
import { motion } from "framer-motion";

const Creer = ({ listePizza, ingredients, UpdateIngredientsFn, nomPizza, handleNomPizzaFn, sauvegarderPizzaFn, prix, elementsCoche }) => {

    //Enregistrement de la pizza et de ses informations lorsque l'utilisateur la sauvegarde
    const navigate = useNavigate();
    const submitHandler = () => {
        sauvegarderPizzaFn();
        //Direction vers la page de détails de la nouvelle pizza
        listePizza.map((current, index) => {
            navigate(`/pizza/${index + 2}`);

        })
    };

    //Désactive le bouton de sauvegarde si la pizza n'est pas nommée
    const isDisabled = nomPizza.trim() === '';

    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="page">
                <div className='divTitre'>
                    <h1 className="titre">Créez votre pizza!</h1>
                </div>
                <div className='nomRenderer'>
                    <fieldset className='nomPizzaRender'>
                        <h1 className='nomRendered'>{nomPizza}</h1>
                    </fieldset>
                </div>

                <div className='listeIngredients'>
                    <div className='divBasePizza'>
                        <fieldset>
                            <legend>Base de pizza</legend>
                            <div className='pate'>
                                <label htmlFor="basePizza">Pâte:</label>
                                {/* Blocage de l'image de base de la pizza */}
                                <input type="checkbox" name="basePizza" id="basePizza" checked readOnly></input>
                            </div>
                        </fieldset>
                        <img src="/images/basePizza.png" alt="basePizza" className="basePizza" />
                    </div>
                    {
                        ingredients.map((current) => (
                            <div key={current.nomIngredient}>
                                <fieldset>
                                    <legend>{current.categorie}</legend>
                                    <div className="choixIngredients">
                                        <label htmlFor={current.nomIngredient}>{current.nomIngredient}:</label>
                                        <input type="checkbox" name={current.nomIngredient} id={current.nomIngredient} checked={current.checked} value={current.nomIngredient} onChange={() => UpdateIngredientsFn(current.nomIngredient)}></input>
                                    </div>
                                </fieldset>
                            </div>


                        ))
                    }
                </div>
                <div className="nomPizza">
                    <fieldset>
                        <legend>Détails de la pizza</legend>
                        <div>
                            <div className='prixPizza'>
                                <fieldset>
                                    <legend>Coût de la pizza</legend>
                                    <div className='prix'>{prix.toFixed(2) + " $"}</div>
                                </fieldset>
                            </div>
                            <div className='nom'>
                                <fieldset>
                                    <legend>Nom de la pizza</legend>
                                    <div>Nom de la pizza</div>
                                    <input type="text" name="nomPizza" id="nomPizza" value={nomPizza} onChange={handleNomPizzaFn} placeholder="Entrez le nom de la pizza" ></input>
                                </fieldset>
                            </div>
                            <button type="submit" onClick={submitHandler} className={isDisabled ? "pizzaButtonDesactive" : "pizzaButtonActive"} disabled={isDisabled}>Enregistrer</button>
                            <div className='hide'>Veuillez entrer un nom pour votre pizza.</div>

                            <div>
                                {
                                    elementsCoche.map((current) => {
                                        return (
                                            <img className="ingredients" key={current.photoUrl} src={current.photoUrl} alt={current.nomPizza} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </fieldset>
                </div>
            </div>
        </motion.div>
    );
}

export default Creer;


