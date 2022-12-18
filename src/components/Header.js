//Notice rouge lorsqu'un item se trouve dans le panier
export default function Header(props) {
    const {compteItemsPanier} = props;
    return(
        <div className=" row center block">
            <div>
                <h2>Panier
                {compteItemsPanier ? <button className="badge">{compteItemsPanier}</button> : ''}</h2>
            </div>
        </div>
    );
}