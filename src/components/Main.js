import Produit from "./Produit";

export default function Main(props) {
    const { itemsPanier, produits, onAdd, onRemove, listePizza, nomPizza, prix } = props;
    return (
        <div className="block col-2">
            <h2>Produits</h2>
            <div className="row">
                {produits.map((produit) => (
                    <fieldset>
                        <Produit
                            key={produit.id}
                            produit={produit}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            listePizza={listePizza}
                            nomPizza={nomPizza}
                            prix={prix}
                            // si le produit existe dans le panier, item va le contenir. S'il n'Existe pas, item sera null
                            item={itemsPanier.find((x) => x.id === produit.id)}>
                        </Produit>
                    </fieldset>
                ))}
            </div>
        </div>
    );
}