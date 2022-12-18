import { motion } from "framer-motion";
import React from "react";

import "./css/Login.css";

function Login({ isAuth, authFn, name }) {

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="app">
        <header className="mdl-layout__header headerLogin">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">La Vieille Croute</span>
            <div className="mdl-layout-spacer"></div>
          </div>
        </header>
        <div className="glob">
          <div className="accueil">
            <h1>Oh?<h2>C'est l'heure de mettre la main à la pâte!</h2></h1>
          </div>
        </div>
        <fieldset className="login-form fieldLogin">
          <div className="login-form">
            <div className="title">Connection</div>
            <div>
              <label> Nom d'utilisateur: </label>
              <input type="text"></input>
            </div>
            <button onClick={() => authFn(!/[^a-zA-Z]/.test(name) && name !== '' ? true : false)} className="btn btn-lg px-5 btnConnexion">Enregistrer</button>
          </div>
        </fieldset>
      </div>
    </motion.div>
  );
}

export default Login;