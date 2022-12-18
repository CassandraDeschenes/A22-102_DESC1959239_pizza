// // Page qui affiche les elements du panier

export default function Panier(props) {
    const { itemsPanier, onAdd, onRemove } = props;
    const prixItems = itemsPanier.reduce((a, c) => a + c.qty * c.prix, 0);
    const taxesPrix = prixItems * 0.14;
    const prixLivraison = prixItems > 100 ? 0 : 20;
    const prixTotal = prixItems + taxesPrix + prixLivraison;
    return (
        <aside className="block col-1">
            <fieldset>
                <h2>Items du panier
                    <div>
                        {itemsPanier.length === 0 && <div>Le panier est vide!</div>}
                        {itemsPanier.map((item) => (
                            <div key={item.id} className="row">
                                <div className="col-1">{item.nom}</div>
                                <div className="co-1">
                                    <button onClick={() => onRemove(item)} className="remove"> - </button>
                                    <button onClick={() => onAdd(item)} className="add"> + </button>
                                </div>
                                <div className="col-1 text-right">
                                    {item.qty} x {item.prix.toFixed(2)}
                                </div>
                            </div>
                        ))}
                        {itemsPanier.length !== 0 && (
                            <>
                                <hr />
                                <div className="row">
                                    <div className="col-2"> Prix des items</div>
                                    <div className="col-1 text-right">{prixItems.toFixed(2)}$ </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"> Taxes</div>
                                    <div className="col-1 text-right">{taxesPrix.toFixed(2)}$ </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"> Coût de livraison</div>
                                    <div className="col-1 text-right">{prixLivraison.toFixed(2)}$ </div>
                                </div>
                                <div className="row">
                                    <div className="col-2"> Prix total</div>
                                    <div className="col-1 text-right"><strong>{prixTotal.toFixed(2)}$</strong></div>
                                </div>
                                <hr />
                                <div className="row">
                                    <button onClick={() => { alert('Commande effectuée avec succès!'); console.log(itemsPanier); }}>
                                        Commander
                                    </button>
                                </div>

                            </>
                        )}
                    </div>
                </h2>
                <div>
                    <h3>Liste des commandes</h3>
                </div>
            </fieldset>
        </aside>
    );
}