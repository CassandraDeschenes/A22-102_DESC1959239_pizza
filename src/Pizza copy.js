// import './css/Pizza.css';

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Creer = () => {

//     //Déclaration des states propres à chaque ingrédient + le state permettant de nomer la pizza
//     const [nomPizza, setnomPizza] = useState('');
//     const [basePizza, setbasePizza] = useState(true);
//     const [pepperoni, setPepperoni] = useState(false);
//     const [jambon, setJambon] = useState(false);
//     const [poivrons, setPoivrons] = useState(false);
//     const [mozarella, setMozarella] = useState(false);
//     const [cheddar, setCheddar] = useState(false);
//     const [feta, setFeta] = useState(false);
//     const [ananas, setAnanas] = useState(false);
//     const [olivesNoires, setOlivesNoires] = useState(false);
//     const [olivesVertes, setOlivesVertes] = useState(false);
//     const [baccon, setBaccon] = useState(false);
//     const [saucisses, setSaucisses] = useState(false);
//     const [anchois, setAnchois] = useState(false);
//     const [epinard, setEpinard] = useState(false);
//     const [champignons, setChampignons] = useState(false);

//     //Objet permettant l'affichage de la pizza finale dans la console
//     const HandleSubmit = (event) => {
//         event.preventDefault();
//         const fin={
//             "nomPizza": nomPizza,
//             "basePizza": basePizza,
//             "pepperoni": pepperoni,
//             "jambon": jambon,
//             "mozarella": mozarella,
//             "cheddar": cheddar,
//             "feta": feta,
//             "poivrons": poivrons,
//             "ananas": ananas,
//             "olivesNoires": olivesNoires,
//             "olivesVertes": olivesVertes,
//             "baccon": baccon,
//             "saucisses": saucisses,
//             "anchois": anchois,
//             "epinard": epinard,
//             "champignons": champignons,
//         }
//         console.log(fin);
//     }

//         //Vérification du champ de texte et des checkbox
//     const Verifier = () => {
//         const ingredients = [basePizza, pepperoni, jambon, mozarella, cheddar, feta, poivrons, ananas, olivesNoires, olivesVertes, baccon, saucisses, anchois, epinard, champignons];
//         if(nomPizza.length > 0 && ingredients.includes(true)) { //s'il y a au moins 1 ingrédient de sélectionné ET un nom
//             return false; //déblocage du bouton
//         }else { //sinon
//             return true; //le bouton reste bloqué
//         }
//     }

//     const navigate = useNavigate();
//     // ...
//     const clickHandler = () => {
//         navigate('/listePizza');
//     };

    
	       
//     return (
//         <div className="page">
//             <h1 className="titre">Pizzabooth</h1>
//             <fieldset className="choixIngredients">
//                 <legend>Ingrédients</legend>
//                 <fieldset className="categorie">
//                     <legend>Base de pizza</legend>
//                     <div>
//                         <label htmlFor="basePizza">Base:</label>
//                         {/* Blocage de l'image de base de la pizza */}
//                         <input type="checkbox" name="basePizza" id="basePizza" checked readOnly></input> 
//                     </div>
//                 </fieldset>

//                 {/* Déclaration des checkbox des idifférents ngrédients */}
//                 <fieldset className="categorie">
//                     <legend>Viande</legend>
//                     <div>
//                         <label htmlFor="Pepperoni">Pepperoni:</label>
//                         <input type="checkbox" name="Pepperoni" id="Pepperoni" onChange={() => setPepperoni(!pepperoni)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="Jambon">Jambon:</label>
//                         <input type="checkbox" name="Jambon" id="Jambon" onChange={() => setJambon(!jambon)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="baccon">Baccon:</label>
//                         <input type="checkbox" name="baccon" id="baccon" onChange={() => setBaccon(!baccon)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="saucisses">Saucisses:</label>
//                         <input type="checkbox" name="saucisses" id="saucisses" onChange={() => setSaucisses(!saucisses)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="anchois">Anchois:</label>
//                         <input type="checkbox" name="anchois" id="anchois" onChange={() => setAnchois(!anchois)}></input>
//                     </div>
//                 </fieldset>

//                 <fieldset className="categorie">
//                     <legend>Fromages</legend>
                    
//                     <div>
//                         <label htmlFor="mozarella">Mozarella:</label>
//                         <input type="checkbox" name="mozarella" id="mozarella" onChange={() => setMozarella(!mozarella)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="cheddar">Cheddar:</label>
//                         <input type="checkbox" name="cheddar" id="cheddar" onChange={() => setCheddar(!cheddar)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="feta">Feta:</label>
//                         <input type="checkbox" name="feta" id="feta" onChange={() => setFeta(!feta)}></input>
//                     </div>
//                 </fieldset>

//                 <fieldset className="categorie">
//                     <legend>Légumes</legend>
//                     <div>
//                         <label htmlFor="Poivrons">Poivrons:</label>
//                         <input type="checkbox" name="Poivrons" id="Poivrons" onChange={() => setPoivrons(!poivrons)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="ananas">Ananas:</label>
//                         <input type="checkbox" name="ananas" id="ananas" onChange={() => setAnanas(!ananas)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="olivesNoires">Olives noires:</label>
//                         <input type="checkbox" name="olivesNoires" id="olivesNoires" onChange={() => setOlivesNoires(!olivesNoires)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="olivesVertes">Olives vertes:</label>
//                         <input type="checkbox" name="olivesVertes" id="olivesVertes" onChange={() => setOlivesVertes(!olivesVertes)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="epinard">Épinards:</label>
//                         <input type="checkbox" name="epinard" id="epinard" onChange={() => setEpinard(!epinard)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="champignons">Champignons:</label>
//                         <input type="checkbox" name="champignons" id="champignons" onChange={() => setChampignons(!champignons)}></input>
//                     </div>
//                 </fieldset>
//             </fieldset>
//             {/* Récupération de l'information du nom de la pizza + bouton permettant l'affichage de la pizza personnalisée dans la  console */}
//             <div className="nomPizza">
//                 <div className="champEnregistrer">
//                     <label htmlFor="nomPizza">Nom de la pizza : </label>
//                     <input type="text" name="nomPizza" id="nomPizza" value={nomPizza} onChange={(e) => setnomPizza(e.target.value)} placeholder="Entrez le nom de la pizza" ></input>
//                     <button type="submit" onClick={(event) => {HandleSubmit(event); alert('La pizza a été enregistrée dans la console!'); clickHandler()}} disabled={Verifier()}>Enregistrer</button>
//                     <div className="texte">
//                         <h1>{nomPizza}</h1>
//                     </div>
//                 </div>            
//             </div>
//             {/* Affichage en temps réel des différentes composantes de la pizza */}
//             <div className="render">
//                 <div className="containerIngredients">
//                     {
//                         basePizza?(
//                         <img src="/images/basePizza.png" alt="basePizza" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         mozarella?(
//                         <img src="/images/Mozarella-1.png" alt="Mozarella" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         cheddar?(
//                         <img src="/images/Cheddar.png" alt="Cheddar" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         pepperoni?(
//                         <img src="/images/Pepperoni.png" alt="Pepperoni" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         jambon?(
//                         <img src="/images/Jambon.png" alt="Jambon" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         saucisses?(
//                         <img src="/images/Saucisses.png" alt="Saucisses" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         ananas?(
//                         <img src="/images/Ananas.png" alt="ananas" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         baccon?(
//                         <img src="/images/Baccon.png" alt="Baccon" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         champignons?(
//                         <img src="/images/Champignons.png" alt="Champignons" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         poivrons?(
//                         <img src="/images/Poivrons.png" alt="Poivrons" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         anchois?(
//                         <img src="/images/Anchois.png" alt="Anchois" className="ingredients" />):(<></>)
//                     }
//                     {
//                         epinard?(
//                         <img src="/images/Epinards.png" alt="Epinards" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         feta?(
//                         <img src="/images/Feta.png" alt="Feta" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         olivesNoires?(
//                         <img src="/images/OlivesNoires.png" alt="OlivesNoires" className="ingredients"/>):(<></>)
//                     }
//                     {
//                         olivesVertes?(
//                         <img src="/images/OlivesVertes.png" alt="OlivesVertes" className="ingredients"/>):(<></>)
//                     }
//                 </div>          
//             </div>
//         </div>
//     );  
// }

// export default Creer;


