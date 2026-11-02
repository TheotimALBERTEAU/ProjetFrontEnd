# Inventaire

Relevé à partir des huit écrans de `env/maquette/` et de `charte.md`.

Écrans : **Accueil**, **Services** (liste), **Fiche** (d'un service), **Demande** (formulaire),
**Espace** (personnel). « 360 » indique que l'écran existe aussi en largeur téléphone.

## Tableau des composants

| Composant | Écrans | Variantes | États à concevoir |
| :- | :- | :- | :- |
| `site-header` | Accueil, Services, Fiche | Poste : logo + nav « Services · Mes demandes · Aide » + bouton « Mon espace » ; téléphone : logo + bouton « Menu » | Lien de page courante (`aria-current="page"`, souligné) ; survol et focus des liens ; menu ouvert / fermé sur téléphone |
| `site-footer` | Tous | Poste : trois colonnes (Le portail, Contact, Informations) + copyright ; téléphone : liste courte (Contact, Accessibilité, Mentions légales) | Survol et focus des liens |
| `breadcrumb` | Services, Fiche, Demande | Chemin complet (poste) ; lien retour « ‹ Services » seul (Fiche 360) | Page courante (`aria-current="page"`, non cliquable) ; survol et focus des liens |
| `page-intro` | Services, Demande, Espace (et le héros de l'Accueil) | `h1` + compteur (« 17 services ») ; `h1` + chapeau ; `h1` avec segment coloré (Accueil) | — (non interactif) ; taille du `h1` poste / téléphone |
| `search-field` | Accueil (+ 360) | Champ et bouton côte à côte (poste) ; bouton sous le champ, pleine largeur (téléphone) | Focus du champ ; survol, focus du bouton ; champ vide soumis ; aucun résultat |
| `category-card` | Accueil (+ 360) | Six catégories (teinte et couleur de texte de la charte) ; grille de 6 colonnes (poste) ou 2 colonnes (téléphone) | Survol ; focus ; catégorie à 0 service |
| `category-badge` | Accueil, Services, Fiche | Six catégories ; taille carte et taille fiche | — (non interactif) |
| `service-card` | Accueil, Services, Fiche (« Dans la même catégorie ») | Six catégories (illustration et badge) ; disponibilité « N places » (succès) ou « Complet » (erreur) ; titre sur une ou deux lignes ; description tronquée | Survol (ombre renforcée) ; focus du lien « Voir la fiche » ; service complet ; image en chargement ou absente |
| `service-facts` | Fiche, Demande (récapitulatif dans l'`aside`) | Liste Lieu / Délai / Places en deux colonnes (poste) ou empilée (téléphone) ; version courte en encadré (Demande) | Places à 0 (« Complet ») |
| `filter-panel` | Services (+ 360) | Panneau latéral `aside` (poste) ; bouton « Filtres » qui l'ouvre (téléphone) | Panneau ouvert / fermé ; filtre actif ; « Réinitialiser les filtres » survol et focus ; liste vide après filtrage |
| `sort-control` | Services (+ 360), Espace (filtre « Statut ») | Liste déroulante avec étiquette (poste) ; bouton « Trier ▾ » (téléphone) | Focus ; ouvert ; option choisie |
| `pagination` | Services (+ 360) | Avec « Page 1 sur 2 » (poste) ; sans (téléphone) | Page courante (`aria-current="page"`) ; survol et focus ; « ‹ » désactivé en première page et « › » en dernière |
| `button` | Tous | Principal (fond primaire : Rechercher, Mon espace, Faire une demande, Envoyer la demande) ; secondaire (contour : Ajouter aux favoris, Annuler, Menu, Filtres, Trier) ; lien d'action (Annuler du formulaire) ; pleine largeur sur téléphone | Survol (`#432a99`) ; focus clavier ; actif / pressé (favori ajouté, `aria-pressed`) ; désactivé ; chargement pendant l'envoi |
| `form-field` | Demande, Services (Délai de traitement), Espace | Texte, e-mail, date, liste déroulante, zone de texte ; avec aide (« Format : … », « 500 caractères au plus ») ; avec erreur ; obligatoire (`*`) ; demi-largeur ou pleine largeur | Focus ; rempli ; invalide (contour et message d'erreur, `aria-invalid`) ; désactivé ; compteur de caractères atteint |
| `choice-field` | Services (Catégorie, Places disponibles), Demande (Créneau, consentement), Espace (Thème, Masquer les services complets) | Groupe de boutons radio (vertical ou horizontal) sous `fieldset` ; case à cocher seule | Coché / non coché ; focus ; survol ; désactivé ; invalide (consentement ou créneau manquant) |
| `form-section` | Demande (Vos coordonnées, Votre demande), Espace (Mes préférences) | Carte blanche avec bordure ; encadré sur fond de section | Contient une erreur (résumé d'erreurs) |
| `requests-table` | Espace | Ligne sans action ; ligne avec action « Annuler » (statut Envoyée) | Survol de ligne ; tableau vide ; aucun résultat après filtrage ; affichage téléphone (non dessiné) ; chargement |
| `status-badge` | Espace | Envoyée, Acceptée, Refusée (couleurs de la charte) | — (non interactif) |

## Écarts à la maquette

Lorsqu'il y a un écart à la maquette lors de l'intégration, le noter ici :

| Écart | Pourquoi ? |
| - | :- |
