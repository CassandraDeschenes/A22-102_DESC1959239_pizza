import Produit from "./Produit";

export default function Main(props) {
    const {itemsPanier, produits, onAdd, onRemove} = props;
    return (
        <div className="block col-2">
            <h2>Produits</h2>
            <div className="row">
                {produits.map((produit)=>(
                <Produit 
                key={produit.id} 
                produit={produit} 
                onAdd={onAdd} 
                onRemove={onRemove} 
                // si le produit existe dans le panier, item va le contenir. S'il n'Existe pas, item sera null
                item={itemsPanier.find((x) => x.id === produit.id)}> 
                </Produit>
                ))}
            </div>
        </div>
    );
}