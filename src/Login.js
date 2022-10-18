import { motion } from "framer-motion";

const Login = () => {
    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>Page de connexion</div>
        </motion.div>
    );
}

export default Login;