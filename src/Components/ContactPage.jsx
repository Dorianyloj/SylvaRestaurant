export default function ContactPage() {

    return (
        <>
            <div className="ContactPage">
                <div className="contact-gauche">
                    <div className="big-div-contact">
                        <div className="div-contact">
                            <h1 className="titre-contact">Horaires</h1>
                            <p>Mercredi a samedi</p>
                            <p>12h -14h 19h-21h</p>
                            <p>Dimanche</p>
                            <p>12h - 14h30</p>
                            <p>Ouvert les jours fériés (sauf les lundis et mardis)</p>
                            <p>Fermeture annuelle du 1 janvier au 1 février</p>
                        </div>
                        <div className="barre-contact"></div>
                        <div className="div-contact">
                            <h1 className="titre-contact">Adresse</h1>
                            <p>22 rue du lac, 10140 Mesnil Saint Père</p>
                        </div>
                        <div className="barre-contact"></div>
                        <div className="div-contact">
                            <h1 className="titre-contact">Contact</h1>
                            <ul>
                                <li><a href="tel:03 72 20 92 84">03 72 20 92 84</a></li>
                                <li>Sylva.restaurant@gmail.com</li>
                                <li><a href="https://www.instagram.com/sylvarestaurant/">SylvaRestaurant</a><img className="icon-insta"
                                    src="https://i.ibb.co/mS5RJfD/instagram.png" alt="Sylva Restaurant"/></li>
                                <li>carrieresylva@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact-image-droite"></div>
            </div>
        </>
    )
}