import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import "./css/ListePizza.css";

const ListePizza = ({ listePizza, pageFn}) => {

    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="bt">
                <h1 className="nomPage">Page de la liste des pizzas</h1>
                <div className="listePizzas">
                    {listePizza.map((current, index) => (
                        <div className="tuilePizza">
                            <fieldset>
                                <Link to={`/pizza/${index + 1}`} key={current.nomPizza} onClick={pageFn} className="lienPizza">
                                    <div className="nomLienPizza">{current.nomPizza}</div>
                                    <div className="imageIngredients">
                                        <img src="../images/basePizza.png" alt="basePizza" className="imageBasePizza" />

                                        {
                                            listePizza.map((a) => {
                                                return (a.ingredients.map((b) => {
                                                    return (
                                                        <img key={b.nomIngredient} src={b.photoUrl} alt={b.nomPizza} className="imagePizza"/>
                                                    )
                                                }))
                                            })

                                        }
                                    </div>

                                    <div className="prixPizza">{current.total.toFixed(2) + " $"}</div>
                                </Link>
                                <div><button className="boutonAjouterPanier">Ajouter au panier</button></div>
                            </fieldset>
                        </div>
                    ))}
                </div>
                <div className="infosSupp">Cliquez sur une pizza pour avoir plus de détails.</div>
                <div className="detailsPizza">
                    <Outlet />

                </div>


            </div>
        </motion.div>
    );
}

export default ListePizza;