import { motion } from "framer-motion";

const DetailPizza = () => {
    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>Page des détails d'une pizza</div>
        </motion.div>
    );
}

export default DetailPizza;