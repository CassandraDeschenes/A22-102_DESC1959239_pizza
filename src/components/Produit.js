export default function Produit(props) {
    const { item, produit, onAdd, onRemove} = props;
    return (
        <div className="card">
            <img className="small" src={produit.image} alt={produit.nom} />
            <h3 className="blob">{produit.nom}</h3>
            <div className="blob">{produit.prix}$</div>
            <div>
                {item ? <div> <button onClick={() => onRemove(item)} className="remove"> - </button> <span className="p-1">{item.qty}</span>
                    <button onClick={() => onAdd(item)} className="add"> + </button>
                </div> :
                    <button onClick={() => onAdd(produit)}>Ajouter au panier</button>
                }
            </div>
        </div>
    );
}