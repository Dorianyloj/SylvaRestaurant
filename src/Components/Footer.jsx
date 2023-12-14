
export default function Footer() {

    return (
        <>
            <div className="Footer">
                <div className="Case-Footer">
                    <p className="Footer-Title">Adresse</p>
                    <p className="Footer-Text">22 rue du lac, 10140 Mesnil Saint Père</p>
                </div>
                <div className="Case-Footer">
                    <p className="Footer-Title">Nous joindre</p>
                    <p className="Footer-Text">03 72 20 92 84</p>
                </div>
                <div className="Case-Footer">
                    <p className="Footer-Title">Réserver</p>
                    <button className="Button-Footer">Réserver une table</button>
                </div>
                <div className="Case-Footer">
                    <p className="Footer-Title">Nous suivre</p>
                    <div className="social-network">
                        <a href="https://www.instagram.com/sylvarestaurant/" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.ibb.co/mS5RJfD/instagram.png" alt="Instagram" className="Instagram-Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}