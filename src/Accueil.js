import { motion } from "framer-motion";

const Accueil = () => {
    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="glob">
                <div className="accueil">
                    <h1>Oh?<h2>C'est l'heure de mettre la main à la pâte!</h2></h1>
                </div>
            </div>
        </motion.div>
    );
}

export default Accueil;