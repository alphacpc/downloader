import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";


export default function Page() {

        const h1 = "text-4xl text-center font-bold py-10"
        const h2 = "text-xl font-bold my-5 uppercase mt-20 text-green-600"
        const ul = "ul-list"

        return <div className=" min-h-[80vh] text-lg mx-[15%]">

                <h1 className={h1}>Manuel d'utilisation de l'application de téléchargement de vidéos YouTube</h1>

                <div>
                        <h2 className={h2}>Introduction</h2>
                        <p>Bienvenue dans l'application de téléchargement de vidéos YouTube !
                        Cette application vous permet de télécharger facilement des vidéos à partir 
                        de liens YouTube, vous permettant ainsi de les regarder hors ligne, de les 
                        sauvegarder localement ou de les partager avec vos amis.</p>
                </div>

                <div>
                        <h2 className={h2}>Utilisation de base</h2>
                        <p>L'utilisation de l'application est simple et intuitive : </p>
                        <ul className={ul}>
                                <li>Copiez le lien de la vidéo YouTube que vous souhaitez télécharger.</li>
                                <img src={photo1} alt="jielko-photo1" />

                                <li>Allez à jielko.app</li>
                                <li>Collez le lien dans la zone prévue à cet effet et attendez la récupération des videos.</li>
                                <img src={photo2} alt="jielko-photo2" />

                                <li>Une fois les videos affichées vous pouvez procéder au téléchargement.</li>
                                <img src={photo3} alt="jielko-photo3" />

                        </ul>
                </div>
                
                <div>
                        <h2 className={h2}>Problèmes courants et solutions</h2>
                        <p>Si vous rencontrez des problèmes lors de l'utilisation de l'application, voici quelques solutions possibles :</p>
                        <ul className={ul}>
                                <li>Problème : La vidéo ne se télécharge pas.</li>
                                <p>Solution : Vérifiez votre connexion Internet et assurez-vous que le lien de la vidéo est valide.</p>
                                <li>Problème : L'application se bloque ou ne répond pas.</li>
                                <p>Solution : Essayez de redémarrer l'application ou de réinstaller l'application pour 
                                résoudre les problèmes de performance.</p>
                        </ul>
                </div>

                <div>
                        <h2 className={h2}>Support technique</h2>
                        <p>Si vous avez besoin d'aide supplémentaire ou si vous rencontrez des problèmes qui ne 
                        sont pas résolus dans ce manuel, n'hésitez pas à contacter notre équipe de support technique. 
                        Vous pouvez trouver nos coordonnées sur notre site Web officiel. </p>
                </div>
        </div>
}