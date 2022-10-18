import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import "./css/Login.css";

function Login() {

  const [messageErreur, setMessageErreur] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //pseudo base de donnée
  const database = [
    {
      identifiant: "usager1",
      motDePasse: "pass1"
    },
    {
      identifiant: "usager2",
      motDePasse: "pass2"
    }
  ];

    //Messages d'erreur
  const errors = {
    uname: "Identifiant non-valide",
    pass: "Mot de passe incorrect"
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //pas de recharge de la page

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.identifiant === uname.value); //Trouver les infos de l'usager

    // Compare user info
    if (userData) { //si l'usager est bon
      if (userData.motDePasse !== pass.value) { //si le mot de passe est incorrect
        // mot de passe incorrect
        setMessageErreur({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true); //connexion autorisée
      }
    } else {
      // identifiant not found
      setMessageErreur({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === messageErreur.name && (
      <div className="error">{messageErreur.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Identifiant </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input type="motDePasse" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/accueil');
    };

  return ( 
  <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
    <div className="app">
      <div className="login-form">
        <div className="title">Connection</div>
        {isSubmitted ? <div class="title" onClick={clickHandler}>La connexion s'est déroulée avec succès!</div> : renderForm}
      </div>
    </div>
    </motion.div>
  );
}

export default Login;