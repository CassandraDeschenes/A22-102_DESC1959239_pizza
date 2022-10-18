import { motion } from "framer-motion";

const Commande = () => {

    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="contenu" >Page du panier</div>
        </motion.div>
    );
}

export default Commande;