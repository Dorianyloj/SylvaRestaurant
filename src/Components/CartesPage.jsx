
export default function CartesPage() {

    return (
        <>
            <div className="CartesPage">
                <div className="Gros-titre">
                    <h1>Les cartes</h1>
                </div>
                <div className="description-produit">
                    <p>Notre carte, en constante évolution, s'inspire des saisons et des producteurs locaux.</p>
                    <p>Découvrez une expérience culinaire qui célèbre la richesse de la nature,
                        avec des plats qui varient au fil des saisons.</p>
                </div>
                <div className="liste-cartes">
                    <div className="line-cartes">
                        <div className="menu">
                            <h1>Offre du midi</h1>
                            <p>Carte</p>
                            <p>Menu enfant</p>
                            <button>Télécharger</button>
                        </div>
                        <div className="menu">
                            <h1>Boissons</h1>
                            <button>Télécharger</button>
                        </div>
                    </div>
                    <h1 style={{marginBottom:30}}>Offres du soir</h1>
                    <div className="line-cartes">
                        <div className="menu">
                            <h1>Au grès de la forêt</h1>
                            <p>5 temps</p>
                            <p>58€</p>
                            <button>Télécharger</button>
                        </div>
                        <div className="menu">
                            <h1>Découverte forestière</h1>
                            <p>3 temps</p>
                            <p>39€</p>
                            <button>Télécharger</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}