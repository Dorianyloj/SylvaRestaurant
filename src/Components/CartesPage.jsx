import Carte_Midi from "../pdf-cartes/Carte.pdf"
import Carte_Boisson from "../pdf-cartes/Carte des boissons.pdf"
import Carte_5temps from "../pdf-cartes/Au grès de la forêt.pdf"
import Carte_3temps from "../pdf-cartes/Découverte forestière.pdf"

import {Link} from 'react-router-dom';


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
                            <a
                                href={Carte_Midi}
                                download="Carte_du_midi_Sylva"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <button>Télécharger</button>
                            </a>
                        </div>
                        <div className="menu">
                            <h1>Boissons</h1>
                            <a
                                href={Carte_Boisson}
                                download="Carte_boissons_Sylva"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>Télécharger</button>
                            </a>
                        </div>
                    </div>
                    <h1 style={{marginBottom: 30}}>Offres du soir</h1>
                    <div className="line-cartes">
                        <div className="menu">
                            <h1>Au grès de la forêt</h1>
                            <p>5 temps</p>
                            <p>58€</p>
                            <a
                                href={Carte_5temps}
                                download="Carte_Grès_de_la_forêt_Sylva"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>Télécharger</button>
                            </a>
                        </div>
                        <div className="menu">
                            <h1>Découverte forestière</h1>
                            <p>3 temps</p>
                            <p>39€</p>
                            <a
                                href={Carte_3temps}
                                download="Carte_3_Temps_Sylva"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>Télécharger</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}