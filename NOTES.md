# Projet FrontEnd

## TP 01 - Le squelette du portail

### 2. Lire la maquette

*5. Prédiction :*

 - Accueil-360
```html
<h1>
    Tous les services du campus, 
    <span>au même endroit</span>
</h1>

<p>Prêt de matériel, salles, logement, sport, aides et santé : faites vos demandes en ligne.</p>

<h2>Parcourir par catégorie</h2>

<!-- Une div par carte -->
<div>
    <h4>Prêt de matériel</h3>
    <p>4 services</p>
</div>

<h2>Services à la une</h2>

<!-- Card -->
<div>
    <span>Prêt de matériel</span>
    <h3>Prêt de caméra</h3>
    <p>Une caméra hybride et deux objectifs, pour un tournage de cours ou 
    de projet</p>
    <!-- ligne en bas de card -->
    <div>
        <span>3 places</span>
        <a href="URL_de_destination">Voir la fiche</a>
    </div>
</div>
```

*6. Découpage :*

 - Accueil-360
```html
<header>
    <img src="chemin/vers/icone.png" alt="nom-de-licone"/>
    <h2>Portail des services</h2>
    <button type="button">Menu</button>
</header>

<div>
    <h1>
        Tous les services du campus, 
        <span>au même endroit</span>
    </h1>
    <p>Prêt de matériel, salles, logement, sport, aides et santé : faites vos demandes en ligne.</p>
    <input type="search" id="service-search" placeholder="Rechercher un service..."/>
    <button type="submit">Rechercher</button>
</div>

<div>
    <h2>Parcourir par catégorie</h2>

    <!-- Une div par ligne puis parcarte -->
    <div id="1ereLigne">
        <div>
            <h4>Prêt de matériel</h3>
            <p>4 services</p>
        </div>
        <div>
            <h4>Salles</h3>
            <p>3 services</p>
        </div>
    </div>

    <div id="2emeLigne">
        <div>
            <h4>Logement</h3>
            <p>3 services</p>
        </div>
    <div>
        <div>
            <h4>Sport</h3>
            <p>3 services</p>
        </div>
    </div>

    <div id="3emeLigne">
        <div>
            <h4>Aides</h3>
            <p>2 services</p>
        </div>
        <div>
            <h4>Santé</h3>
            <p>2 services</p>
        </div>
    </div>
</div>

<div>
    <h1>Services à la une<h1>
        
    <div>
        <span>Prêt de matériel</span>
        <h3>Prêt de caméra</h3>
        <p>Une caméra hybride et deux objectifs, pour un tournage de cours ou de projet</p>
        <!-- ligne en bas de card -->
        <div>
            <span>3 places</span>
            <a href="URL_de_destination">Voir la fiche</a>
        </div>
    </div>
</div>

<footer>
    <a href="URL_de_destination">Contact</a>
    <p>Accessibilité : partiellement conforme</p>
    <a href="URL_de_destination">Mentions légales</a>
    <p>© 2026 Portail des services</p>
</footer>
```

 - Accueil-1280
```html
<header>
    <img src="chemin/vers/icone.png" alt=""/>
    <a href="./index.html">Portail des services</a>
    <nav>
        <ul>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./espace.html">Mes demandes</a></li>
            <li><a href="./aide.html">Aide</a></li>
        </ul>
    </nav>
    <a href="./espace.html">Mon espace</a>
</header>

<main id="contenu">
    <section>
        <h1>
            Tous les services du campus,
            <span>au même endroit</span>
        </h1>
        <p>Prêt de matériel, salles, logement, sport, aides et santé : faites vos demandes en ligne.</p>
        <form role="search">
            <input type="search" id="service-search" placeholder="Rechercher un service..."/>
            <button type="submit">Rechercher</button>
        </form>
    </section>

    <section>
        <h2>Parcourir par catégorie</h2>
        
        <ul>
            <li><a href="./services.html?categorie=materiel">Prêt de matériel</a> <p>4 services</p></li>
            <li><a href="./services.html?categorie=salles">Salles</a> <p>3 services</p></li>
            <li><a href="./services.html?categorie=logement">Logement</a> <p>3 services</p></li>
            <li><a href="./services.html?categorie=sport">Sport</a> <p>3 services</p></li>
            <li><a href="./services.html?categorie=aides">Aides</a> <p>2 services</p></li>
            <li><a href="./services.html?categorie=sante">Santé</a> <p>2 services</p></li>
        </ul>
    </section>

    <section>
        <h2>Services à la une</h2>
        
        <ul>
            <li>
                <article>
                    <img src="/img/camera-800.jpg" alt="" width="800" height="533"/>
                    <span>Prêt de matériel</span>
                    <h3>Prêt de caméra</h3>
                    <p>Une caméra hybride et deux objectifs, pour un tournage de cours ou de projet.</p>
                    <div>
                        <span>3 places</span>
                        <a href="./service.html?id=2">Voir la fiche</a>
                    </div>
                </article>
            </li>
            <li>
                <article>
                    <img src="/img/salle-800.jpg" alt="" width="800" height="533"/>
                    <span>Salles</span>
                    <h3>Réservation de salle</h3>
                    <p>Une salle de travail de quatre à douze places, à l'heure.</p>
                    <div>
                        <span>8 places</span>
                        <a href="./service.html?id=5">Voir la fiche</a>
                    </div>
                </article>
            </li>
            <li>
                <article>
                    <img src="/img/sport-800.jpg" alt="" width="800" height="533"/>
                    <span>Sport</span>
                    <h3>Inscription au sport universitaire</h3>
                    <p>Une activité sportive par semestre, de l'escalade au volley.</p>
                    <div>
                        <span>40 places</span>
                        <a href="./service.html?id=11">Voir la fiche</a>
                    </div>
                </article>
            </li>
        </ul>
    </section>
</main>

<footer>
    <div>
        <h2>Le portail</h2>
        <a href="./services.html">Tous les services</a>
        <a href="./espace.html">Mes demandes</a>
        <a href="./aide.html">Aide</a>
    </div>
    <div>
        <h2>Contact</h2>
        <p>Accueil vie étudiante</p>
        <p>02 00 00 00 00</p>
        <p>Lundi au vendredi, 9 h à 17 h</p>
    </div>
    <div>
        <h2>Informations</h2>
        <a href="…">Accessibilité : partiellement conforme</a>
        <a href="…">Mentions légales</a>
        <a href="…">Plan du site</a>
    </div>
    <p>© 2026 Portail des services</p>
</footer>
```

 - Services-1280
```html
<header>
    <img src="chemin/vers/icone.png" alt=""/>
    <a href="./index.html">Portail des services</a>
    <nav>
        <ul>
            <li><a href="./services.html" aria-current="page">Services</a></li>
            <li><a href="./espace.html">Mes demandes</a></li>
            <li><a href="./aide.html">Aide</a></li>
        </ul>
    </nav>
    <a href="./espace.html">Mon espace</a>
</header>

<main id="contenu">
    <nav aria-label="Chemin de Navigation">
        <ol>
            <li><a href="./index.html">Accueil</a></li>
            <li><a href="./services.html" aria-current="page">Services</a></li>
        </ol>
    </nav>

    <h1>Services</h1>
    <p>17 services</p>

    <label for="tri">Trier par</label>
    <select id="tri">
        <option>Nom, de A à Z</option>
    </select>

    <aside>
        <h2>Filtrer</h2>
        <form>
            <fieldset>
                <legend>Catégorie</legend>
                <input type="radio" id="cat-toutes" name="categorie" checked/> <label for="cat-toutes">Toutes</label>
                <input type="radio" id="cat-materiel" name="categorie"/> <label for="cat-materiel">Prêt de matériel</label>
                <input type="radio" id="cat-salles" name="categorie"/> <label for="cat-salles">Salles</label>
                <input type="radio" id="cat-logement" name="categorie"/> <label for="cat-logement">Logement</label>
                <input type="radio" id="cat-sport" name="categorie"/> <label for="cat-sport">Sport</label>
                <input type="radio" id="cat-aides" name="categorie"/> <label for="cat-aides">Aides</label>
                <input type="radio" id="cat-sante" name="categorie"/> <label for="cat-sante">Santé</label>
            </fieldset>
            <input type="checkbox" id="dispo"/> <label for="dispo">Places disponibles uniquement</label>
            <label for="delai">Délai de traitement</label>
            <select id="delai">
                <option>Tous les délais</option>
            </select>
            <button type="reset">Réinitialiser les filtres</button>
        </form>
    </aside>

    <ul>
        <li>
            <article>
                <img src="/img/logement-800.jpg" alt="" width="800" height="533"/>
                <span>Logement</span>
                <h3><a href="./service.html?id=10">Accompagnement garantie locative</a></h3>
                <p>Constituer votre demande de garantie…</p>
                <p>6 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/aide-800.jpg" alt="" width="800" height="533"/>
                <span>Aides</span>
                <h3><a href="./service.html?id=14">Aide d'urgence</a></h3>
                <p>Une aide financière ponctuelle en cas de difficulté soudaine.</p>
                <p>15 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/logement-800.jpg" alt="" width="800" height="533"/>
                <span>Logement</span>
                <h3><a href="./service.html?id=8">Aide à la recherche de logement</a></h3>
                <p>Un rendez-vous pour cibler vos recherches…</p>
                <p>10 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/colocation-800.jpg" alt="" width="800" height="533"/>
                <span>Logement</span>
                <h3><a href="./service.html?id=9">Colocation étudiante</a></h3>
                <p>Trouver une chambre ou un colocataire parmi les étudiants du campus.</p>
                <p>30 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/impression-800.jpg" alt="" width="800" height="533"/>
                <span>Prêt de matériel</span>
                <h3><a href="./service.html?id=4">Impression grand format</a></h3>
                <p>Affiches A1 et A0 pour une soutenance ou un salon.</p>
                <p>20 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/sport-800.jpg" alt="" width="800" height="533"/>
                <span>Sport</span>
                <h3><a href="./service.html?id=11">Inscription au sport universitaire</a></h3>
                <p>Une activité sportive par semestre, de l'escalade au volley.</p>
                <p>40 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/job-800.jpg" alt="" width="800" height="533"/>
                <span>Aides</span>
                <h3><a href="./service.html?id=15">Job étudiant sur le campus</a></h3>
                <p>Des missions rémunérées à la bibliothèque, à l'accueil ou au…</p>
                <p>9 places</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/portable-800.jpg" alt="" width="800" height="533"/>
                <span>Prêt de matériel</span>
                <h3><a href="./service.html?id=3">Prêt d'ordinateur portable</a></h3>
                <p>Un portable pour la durée d'une réparation ou d'un examen sur machine.</p>
                <p>Complet</p>
            </article>
        </li>
        <li>
            <article>
                <img src="/img/camera-800.jpg" alt="" width="800" height="533"/>
                <span>Prêt de matériel</span>
                <h3><a href="./service.html?id=2">Prêt de caméra</a></h3>
                <p>Une caméra hybride et deux objectifs, pour un tournage de cours ou de projet.</p>
                <p>3 places</p>
            </article>
        </li>
    </ul>

    <nav aria-label="Pagination">
        <ul>
            <li><a href="./services.html?page=1" aria-label="Page précédente">‹</a></li>
            <li><a href="./services.html?page=1" aria-current="page">1</a></li>
            <li><a href="./services.html?page=2">2</a></li>
            <li><a href="./services.html?page=2" aria-label="Page suivante">›</a></li>
        </ul>
        <p>Page 1 sur 2</p>
    </nav>
</main>

<footer>…</footer>
```

 - Service-1280
```html
<header>…</header>

<main id="contenu">
    <nav aria-label="Chemin de Navigation">
        <ol>
            <li><a href="./index.html">Accueil</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./service.html?id=2" aria-current="page">Prêt de caméra</a></li>
        </ol>
    </nav>

    <img src="/img/camera-800.jpg" alt="" width="800" height="533"/>
    <span>Prêt de matériel</span>
    <h1>Prêt de caméra</h1>
    <p>Une caméra hybride et deux objectifs, pour un tournage de cours ou de projet.</p>

    <dl>
        <dt>Lieu</dt>
        <dd>Bâtiment A, rez-de-chaussée</dd>
        <dt>Délai</dt>
        <dd>2 jours ouvrés</dd>
        <dt>Places</dt>
        <dd>3 disponibles</dd>
    </dl>

    <a href="./demande.html?id=2">Faire une demande</a>
    <button type="button">☆ Ajouter aux favoris</button>

    <section>
        <h2>Le service en détail</h2>
        <p>Le prêt dure trois jours ouvrés. Une courte prise en main est proposée au premier emprunt ; la batterie est rendue chargée.</p>
    </section>

    <aside>
        <h2>Dans la même catégorie</h2>
        <ul>
            <li>
                <article>
                    <img src="/img/materiel-800.jpg" alt="" width="800" height="533"/>
                    <span>Prêt de matériel</span>
                    <h3><a href="./service.html?id=1">Prêt de matériel</a></h3>
                    <p>Empruntez un trépied, un micro ou une tablette graphique pour un projet.</p>
                    <p>12 places</p>
                </article>
            </li>
            <li>
                <article>
                    <img src="/img/portable-800.jpg" alt="" width="800" height="533"/>
                    <span>Prêt de matériel</span>
                    <h3><a href="./service.html?id=3">Prêt d'ordinateur portable</a></h3>
                    <p>Un portable pour la durée d'une réparation ou d'un examen sur machine.</p>
                    <p>Complet</p>
                </article>
            </li>
            <li>
                <article>
                    <img src="/img/impression-800.jpg" alt="" width="800" height="533"/>
                    <span>Prêt de matériel</span>
                    <h3><a href="./service.html?id=4">Impression grand format</a></h3>
                    <p>Affiches A1 et A0 pour une soutenance ou un salon.</p>
                    <p>20 places</p>
                </article>
            </li>
        </ul>
    </aside>
</main>

<footer>…</footer>
```

 - Demande-1280
```html
<header>…</header>

<main id="contenu">
    <nav aria-label="Chemin de Navigation">
        <ol>
            <li><a href="./index.html">Accueil</a></li>
            <li><a href="./service.html?id=2">Prêt de caméra</a></li>
            <li><a href="./demande.html?id=2" aria-current="page">Demande</a></li>
        </ol>
    </nav>

    <h1>Faire une demande</h1>
    <p>Les champs marqués d'un astérisque sont obligatoires.</p>

    <form>
        <fieldset>
            <legend>Vos coordonnées</legend>
            <label for="nom">Nom *</label>
            <input type="text" id="nom" required/>
            <label for="prenom">Prénom *</label>
            <input type="text" id="prenom" required/>
            <label for="email">Adresse e-mail *</label>
            <input type="email" id="email" required aria-describedby="email-aide email-erreur"/>
            <p id="email-aide">Format : nom@domaine.fr</p>
            <p id="email-erreur">Saisissez une adresse complète, par exemple nom@domaine.fr.</p>
        </fieldset>

        <fieldset>
            <legend>Votre demande</legend>
            <label for="service">Service *</label>
            <select id="service" required>
                <option>Prêt de caméra</option>
            </select>
            <label for="date">Date souhaitée *</label>
            <input type="date" id="date" required/>
            <fieldset>
                <legend>Créneau *</legend>
                <input type="radio" id="matin" name="creneau" checked/> <label for="matin">Matin</label>
                <input type="radio" id="apres-midi" name="creneau"/> <label for="apres-midi">Après-midi</label>
            </fieldset>
            <label for="commentaire">Commentaire</label>
            <textarea id="commentaire" maxlength="500" aria-describedby="commentaire-aide"></textarea>
            <p id="commentaire-aide">500 caractères au plus</p>
            <input type="checkbox" id="consentement" required/>
            <label for="consentement">J'accepte que mes coordonnées servent au traitement de la demande. *</label>
        </fieldset>

        <button type="submit">Envoyer la demande</button>
        <a href="./service.html?id=2">Annuler</a>
    </form>

    <aside>
        <h2>Prêt de caméra</h2>
        <p>Délai : 2 jours ouvrés</p>
        <p>3 places disponibles</p>
        <p>Bâtiment A, rez-de-chaussée</p>
    </aside>
</main>

<footer>…</footer>
```

 - Espace-1280
```html
<header>
    <img src="chemin/vers/icone.png" alt=""/>
    <a href="./index.html">Portail des services</a>
    <nav>
        <ul>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./espace.html" aria-current="page">Mes demandes</a></li>
            <li><a href="./aide.html">Aide</a></li>
        </ul>
    </nav>
    <a href="./espace.html">Mon espace</a>
</header>

<main id="contenu">
    <h1>Mes demandes</h1>
    <p>Bonjour Camille. Voici vos demandes de ce semestre.</p>

    <label for="statut">Statut</label>
    <select id="statut">
        <option>Tous les statuts</option>
    </select>

    <table>
        <caption>Mes demandes du semestre</caption>
        <thead>
            <tr>
                <th scope="col">Service</th>
                <th scope="col">Date</th>
                <th scope="col">Créneau</th>
                <th scope="col">Statut</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Prêt de caméra</th>
                <td>14/10/2026</td>
                <td>Matin</td>
                <td><span>Acceptée</span></td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">Réservation de salle</th>
                <td>15/10/2026</td>
                <td>Après-midi</td>
                <td><span>Envoyée</span></td>
                <td><button type="button">Annuler</button></td>
            </tr>
            <tr>
                <th scope="row">Inscription au sport universitaire</th>
                <td>20/10/2026</td>
                <td>Matin</td>
                <td><span>Refusée</span></td>
                <td></td>
            </tr>
        </tbody>
    </table>

    <aside>
        <h2>Mes préférences</h2>
        <form>
            <fieldset>
                <legend>Thème</legend>
                <input type="radio" id="clair" name="theme"/> <label for="clair">Clair</label>
                <input type="radio" id="sombre" name="theme"/> <label for="sombre">Sombre</label>
                <input type="radio" id="systeme" name="theme" checked/> <label for="systeme">Comme le système</label>
            </fieldset>
            <input type="checkbox" id="masquer-complets" checked/>
            <label for="masquer-complets">Masquer les services complets</label>
            <p>Enregistrées sur cet appareil.</p>
        </form>
    </aside>
</main>

<footer>…</footer>
```

| Écran | En-tête | Navigation | Contenu principal | Contenu complémentaire | Pied de page |
| - | - | - | - | - | - |
| Accueil | `header` | `nav` (bouton Menu sur mobile) | `main` | — | `footer` |
| Services | `header` | `nav` + `nav` Chemin de Navigation + `nav` pagination | `main` | `aside` (filtres) | `footer` |
| Fiche | `header` | `nav` + `nav` Chemin de Navigation | `main` | `aside` (même catégorie, PC) | `footer` |
| Demande | `header` | `nav` + `nav` Chemin de Navigation | `main` | `aside` (récapitulatif) | `footer` |
| Espace | `header` | `nav` | `main` | `aside` (préférences) | `footer` |
