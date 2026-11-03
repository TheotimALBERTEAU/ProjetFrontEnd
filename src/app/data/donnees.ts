// Données recopiées depuis env/api/db.json (ProjetFrontEnd).

export interface Categorie {
  id: string;
  libelle: string;
}

export interface Service {
  id: string;
  nom: string;
  categorie: string;
  resume: string;
  description: string;
  lieu: string;
  delai: number;
  places: number;
  image: string;
}

export interface Demande {
  id: string;
  serviceId: string;
  date: string;
  creneau: 'matin' | 'apres-midi';
  commentaire: string;
  statut: 'envoyee' | 'acceptee' | 'refusee';
}

export const CATEGORIES: Categorie[] = [
  {
    "id": "materiel",
    "libelle": "Prêt de matériel"
  },
  {
    "id": "salles",
    "libelle": "Salles"
  },
  {
    "id": "logement",
    "libelle": "Logement"
  },
  {
    "id": "sport",
    "libelle": "Sport"
  },
  {
    "id": "aide",
    "libelle": "Aides"
  },
  {
    "id": "sante",
    "libelle": "Santé"
  }
];

export const SERVICES: Service[] = [
  {
    "id": "1",
    "nom": "Prêt de matériel",
    "categorie": "materiel",
    "resume": "Empruntez un trépied, un micro ou une tablette graphique pour un projet.",
    "description": "Le service audiovisuel prête le petit matériel de projet pour une semaine, renouvelable une fois. Présentez votre carte étudiante au retrait.",
    "lieu": "Bâtiment A, rez-de-chaussée",
    "delai": 1,
    "places": 12,
    "image": "materiel"
  },
  {
    "id": "2",
    "nom": "Prêt de caméra",
    "categorie": "materiel",
    "resume": "Une caméra hybride et deux objectifs, pour un tournage de cours ou de projet.",
    "description": "Le prêt dure trois jours ouvrés. Une courte prise en main est proposée au premier emprunt ; la batterie est rendue chargée.",
    "lieu": "Bâtiment A, rez-de-chaussée",
    "delai": 2,
    "places": 3,
    "image": "camera"
  },
  {
    "id": "3",
    "nom": "Prêt d'ordinateur portable",
    "categorie": "materiel",
    "resume": "Un portable pour la durée d'une réparation ou d'un examen sur machine.",
    "description": "Prêt de deux semaines au plus, sur justificatif. Le poste est réinitialisé au retour : sauvegardez vos fichiers ailleurs.",
    "lieu": "Bâtiment B, salle B012",
    "delai": 3,
    "places": 0,
    "image": "portable"
  },
  {
    "id": "4",
    "nom": "Impression grand format",
    "categorie": "materiel",
    "resume": "Affiches A1 et A0 pour une soutenance ou un salon.",
    "description": "Déposez un PDF aux bonnes dimensions ; le tirage est prêt sous trois jours ouvrés. Gratuit dans la limite de deux affiches par semestre.",
    "lieu": "Bâtiment B, salle B014",
    "delai": 3,
    "places": 20,
    "image": "impression"
  },
  {
    "id": "5",
    "nom": "Réservation de salle",
    "categorie": "salles",
    "resume": "Une salle de travail de quatre à douze places, à l'heure.",
    "description": "Réservation par créneau d'une heure, trois heures au plus par jour et par équipe. Écran et tableau blanc dans toutes les salles.",
    "lieu": "Bâtiments A et C",
    "delai": 1,
    "places": 8,
    "image": "salle"
  },
  {
    "id": "6",
    "nom": "Studio d'enregistrement",
    "categorie": "salles",
    "resume": "Un studio insonorisé pour un podcast ou une voix off.",
    "description": "Créneaux de deux heures, sur réservation. Micros et interface audio fournis ; apportez votre casque.",
    "lieu": "Bâtiment C, sous-sol",
    "delai": 4,
    "places": 2,
    "image": "studio"
  },
  {
    "id": "7",
    "nom": "Salle de projet",
    "categorie": "salles",
    "resume": "Une salle attribuée à une équipe pour la durée d'un projet.",
    "description": "Attribution pour quatre semaines au plus, selon les disponibilités. La demande précise l'équipe et la date de fin du projet.",
    "lieu": "Bâtiment C, premier étage",
    "delai": 2,
    "places": 4,
    "image": "salle"
  },
  {
    "id": "8",
    "nom": "Aide à la recherche de logement",
    "categorie": "logement",
    "resume": "Un rendez-vous pour cibler vos recherches et monter votre dossier.",
    "description": "Un conseiller relit votre dossier de location et vous oriente vers les résidences et les annonces vérifiées.",
    "lieu": "Accueil vie étudiante",
    "delai": 5,
    "places": 10,
    "image": "logement"
  },
  {
    "id": "9",
    "nom": "Colocation étudiante",
    "categorie": "logement",
    "resume": "Trouver une chambre ou un colocataire parmi les étudiants du campus.",
    "description": "Les annonces sont relues avant publication. Vous recevez les coordonnées des personnes intéressées par courriel.",
    "lieu": "En ligne",
    "delai": 7,
    "places": 30,
    "image": "colocation"
  },
  {
    "id": "10",
    "nom": "Accompagnement garantie locative",
    "categorie": "logement",
    "resume": "Constituer votre demande de garantie locative avec un conseiller.",
    "description": "Un conseiller vous aide à rassembler les pièces et à déposer la demande auprès de l'organisme de garantie.",
    "lieu": "Accueil vie étudiante",
    "delai": 10,
    "places": 6,
    "image": "logement"
  },
  {
    "id": "11",
    "nom": "Inscription au sport universitaire",
    "categorie": "sport",
    "resume": "Une activité sportive par semestre, de l'escalade au volley.",
    "description": "L'inscription donne accès à un créneau hebdomadaire. Un certificat médical est demandé pour certaines activités.",
    "lieu": "Gymnase du campus",
    "delai": 3,
    "places": 40,
    "image": "sport"
  },
  {
    "id": "12",
    "nom": "Prêt de vélo",
    "categorie": "sport",
    "resume": "Un vélo pour le semestre, antivol compris.",
    "description": "Prêt contre caution, restituée au retour du vélo en bon état. Entretien gratuit à mi-semestre.",
    "lieu": "Parking à vélos, entrée nord",
    "delai": 2,
    "places": 0,
    "image": "velo"
  },
  {
    "id": "13",
    "nom": "Salle de musculation",
    "categorie": "sport",
    "resume": "Accès libre à la salle, aux heures d'ouverture.",
    "description": "Une séance d'accueil est obligatoire avant le premier accès. La salle ouvre de 7 h à 21 h en semaine.",
    "lieu": "Gymnase du campus",
    "delai": 1,
    "places": 25,
    "image": "sport"
  },
  {
    "id": "14",
    "nom": "Aide d'urgence",
    "categorie": "aide",
    "resume": "Une aide financière ponctuelle en cas de difficulté soudaine.",
    "description": "Demande étudiée sous deux jours ouvrés par la commission sociale. La réponse est confidentielle.",
    "lieu": "Service social",
    "delai": 2,
    "places": 15,
    "image": "aide"
  },
  {
    "id": "15",
    "nom": "Job étudiant sur le campus",
    "categorie": "aide",
    "resume": "Des missions rémunérées à la bibliothèque, à l'accueil ou au tutorat.",
    "description": "Contrats de dix heures par semaine au plus, compatibles avec l'emploi du temps. Les offres sont publiées chaque mois.",
    "lieu": "Service des ressources humaines",
    "delai": 5,
    "places": 9,
    "image": "job"
  },
  {
    "id": "16",
    "nom": "Rendez-vous médecin",
    "categorie": "sante",
    "resume": "Une consultation avec le médecin du service de santé.",
    "description": "Consultation gratuite, sur rendez-vous. En cas d'urgence, appelez le 15.",
    "lieu": "Centre de santé",
    "delai": 3,
    "places": 5,
    "image": "sante"
  },
  {
    "id": "17",
    "nom": "Soutien psychologique",
    "categorie": "sante",
    "resume": "Un entretien confidentiel avec un psychologue.",
    "description": "Jusqu'à six entretiens gratuits par année universitaire, sur rendez-vous.",
    "lieu": "Centre de santé",
    "delai": 2,
    "places": 4,
    "image": "ecoute"
  }
];

export const DEMANDES: Demande[] = [
  {
    "id": "1",
    "serviceId": "2",
    "date": "2026-10-14",
    "creneau": "matin",
    "commentaire": "Tournage du projet vidéo de groupe.",
    "statut": "acceptee"
  },
  {
    "id": "2",
    "serviceId": "5",
    "date": "2026-10-15",
    "creneau": "apres-midi",
    "commentaire": "Révision en équipe de quatre.",
    "statut": "envoyee"
  },
  {
    "id": "3",
    "serviceId": "11",
    "date": "2026-10-20",
    "creneau": "matin",
    "commentaire": "",
    "statut": "refusee"
  }
];
