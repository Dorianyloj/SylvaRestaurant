import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const imageUrl = "https://i.ibb.co/71kYCRd/image-2023-06-08-091518387-removebg-preview-modified.png";
export default function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Ajoute un écouteur d'événement pour détecter le défilement de la page
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Vérifie si la page a été défilée
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <>
            <div className={`NavBar ${isScrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="Titre-NavBar">Sylva</Link>
                <div className="Onglet-NavBar">
                    <a href="/cartes">Cartes</a>
                    <a href="/equipe">Equipe</a>
                    <a href="/producteurs">Producteurs</a>
                    <a href="/contact">Contact</a>
                    <button className="Button-Reservation-NavBar">Reservation</button>
                </div>
            </div>
        </>
    )
}