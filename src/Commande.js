import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Panier from "./components/Panier";
import './css/Commande.css';
import data from "./data";


const Commande = () => {
    const [itemsPanier, setItemsPanier] = useState([]);
    const {produits} = data;

    const onAdd = (produit) => {
        const exist = itemsPanier.find((x) => x.id === produit.id); //est-ce que l'item est déjà dans le panier?
        if(exist) {
            const newItemsPanier = itemsPanier.map((x) => x.id === produit.id ? {...exist, qty: exist.qty + 1} : x); //si l'id d'un item est égal à l'item dans le panier, l'augmenter de 1, sinon, ne change rien
            setItemsPanier(newItemsPanier);
            localStorage.setItem('itemsPanier', JSON.stringify(newItemsPanier));
        }else {
            const newItemsPanier = [...itemsPanier, {...produit,qty:1}];
            setItemsPanier(newItemsPanier);
            localStorage.setItem('itemsPanier', JSON.stringify(newItemsPanier));
        }
    };

    
    const onRemove = (produit) => {
        const exist = itemsPanier.find((x) => x.id === produit.id);
        if(exist.qty===1) {
            const newItemsPanier = itemsPanier.filter((x) => x.id !== produit.id); //enlever l'item si il n'y a qu'un seul item
            setItemsPanier(newItemsPanier); // mise à jour
            localStorage.setItem('itemsPanier', JSON.stringify(newItemsPanier));

        }else {
            const newItemsPanier = itemsPanier.map((x) => x.id === produit.id ? {...exist, qty: exist.qty - 1} : x); //rduite le nombre d'item s'il y en a plus qu'un avec le même id
            setItemsPanier(newItemsPanier); //mise à jour
            localStorage.setItem('itemsPanier', JSON.stringify(newItemsPanier));  
        }
    }

    useEffect(() => {
        setItemsPanier(localStorage.getItem('itemsPanier') ? JSON.parse(localStorage.getItem('itemsPanier')) : []);
    },[]);
    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <Header compteItemsPanier={itemsPanier.length}/>
                <div className="row">
                    <Main itemsPanier={itemsPanier} produits={produits} onAdd={onAdd} onRemove={onRemove}/>
                    <Panier itemsPanier={itemsPanier} onAdd={onAdd} onRemove={onRemove}/>
                </div>
            </div>
        </motion.div>
    );
}

export default Commande;