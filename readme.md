# Notre Trello : https://trello.com/b/dPSGMU2z/do-to

# Notre site git : https://lucilev.github.io/TI-FrontEnd-AllezCine/

# Qui a fait quoi?  : https://github.com/LucileV/TI-FrontEnd-AllezCine/projects/1







# Travail Intégration

Ce que nous appelons un travail d'intégration, c'est un travail avec des consignes à respecter impérativement. Les TI conclut une période d'apprentissage et vous permette de mettre en pratique ce que vous avez appris. Ils permettent également à vos formateurs de vous évaluer, savoir où vous avez encore des difficultés et savoir quels sont vos acquis. Enfin, ces travaux, s'ils sont réalisés correctement, peuvent faire partie d'un portfolio que vous pourriez montrer à un employeur.

**!!! N'oubliez pas de nommer votre repo "TI-FrontEnd-AllezCine" !!!**

**!!! Un repo par projet ! Et n'oubliez pas votre readme.md !!!**

# Travail d'intégration Front-End

Ce TI conclut les deux mois de front-end que nous avons eus ensemble.
Vous avez **3 travails en rendre**.
- Un site en ONE PAGE avec un design fournit ([yes !](layout-one-page.jpg)).


Pour cela, vous devez utiliser toutes les techno vues depuis le début, c’est à dire :
- HTML
- CSS
- JavaScript
- jQuery
- Responsive design( EN OPTION SI VOUS AVEZ LE TEMPS)
- Bootstrap
- Font Awesome Icons
et autres

Remarque : Le style par défaut de Bootstrap soit complètement absent (utilisez Bootstrap sans que l’on puisse voir que Bootstrap a été utilisé).

## A . Site avec LAYOUT

Vous allez réaliser, en groupe, un site internet de location et vente des films. ATTENTION, il s'agit d'un site en one-page !

- [Cliquez ici pour voir le layout](layout-one-page.jpg)
- On met également à votre disposition quelques affiches de films, histoire de vous faire gagner un peu de temps (les titres, années et genre sont dans les noms des images. De rien.)

### Entrer sur le site
Lorsqu’on entre sur le site il faut contraindre l’utilisateur à entrer son âge.
S’il a 18 ans et plus, l’autoriser à entrer sur le site, sinon le rediriger sur le site de moins de 18 ans. (Pour cela utiliser JS ou Jquery pour un pop-up).

Une fois sur le site, faire apparaître n’importe où sur le site une box pour la mise en garde de COOKIES.(on en voit ces derniers temps partout sur le net)

 Lorsqu’on clique sur le bouton LOGIN faire apparaître en JS ou Jquery dans une box un formulaire de connexion. (voir le site http://www.commeaucinema.com/)
 Ce formulaire de connexion contiendra :
 - identifiant,
 - password,
 - un bouton OK,
 - un bouton “Créer un compte”,
 - un "rester connecté"
 - un lien “Si vous avez oublié votre mot de passe”
 - et un lien CANCEL.

(Difficulté, faire disparaître le formulaire lorsqu'on clique sur CANCEL ou sur le formulaire).

### Menu
Un **menu** en bootstrap avec des sous-menus.

Comme c’est une onepage, les liens du menu doivent pointer vers les sections dédiées.

### En-tête
Le **jumbotron** de l'entête doit faire 100% de la largeur de l'écran dans lequel il y a un slide (Cf layout). Faire fonctionner le **slide** en CSS ou en JS ou Jquery)

### Les boutons réseaux sociaux
Les **boutons de réseaux sociaux** sont en position fixe. Si on clique sur un bouton, il doit s’allonger avec une animation (ici utilisez juste du CSS).

### Section Films
Chaque film doit comporter :
- une affiche,
- un titre,
- l’année de sortie,
- et le genre.

Si on clique sur l’image ou titre du film, faire apparaître dans un modal (Bootstrap) le trailer youtube du film, la description, le réalisateur, l’année de sortie du film, le genre, les acteurs…

### Section Featured Movies
Créer des boutons pour filtrer les films par genre (Jquery ou JS).
Si on clique sur le bouton ACTION par exemple, afficher uniquement les films d’actions, etc...

Lorsqu’on clique sur le bouton “plus des films”, afficher les autres films cachés. Faire disparaître le bouton “plus des films” et le remplacer par le bouton “Moins des films” si on clique sur “moins des films”, cacher les films et faire réapparaître le bouton “plus des films“  (En jQuery sera plus facile, avec un toggle par exemple).

### Section Shop Movie
Utiliser les deux petits boutons à droite pour faire défiler les films de gauche à droite et vise-versa (Jquery, bootstrap, JS au choix)

### Section Contact Us
Créer un formulaire et afficher dans un 
les entrées du formulaire lorsqu’on clique sur “Send Message”. (Pas de traitement en php, prochainement promis)

Bonus : mettre une map dans la section Contact us.


### Section Footer
Faites en sorte que lorsqu’on clique sur le petit bouton orange avec la flèche blanche, on monte jusqu’à l'entête du site, le petit bouton disparaît une fois que l'entête apparaît.

CONTRAINTE : créer ce bouton en pur JS avec createElement(), createTextNode() et compagnie(), l’afficher sur le DOM, le positionner puis le styler en CSS dans la feuille de style.

FAITES QUE LE SITE SOIT RESPONSIVE (Bootstrap + Media queries)

Si quelque chose a été oublié, contactez Eric pour qu'il l'ajoute à la liste que vous avez déjà à faire. //edit Eric : hihihihihi Je suis diabolique.



**Conseils**

1. Réalisez d'abord le HTML, placez-y le contenu, ensuite écrivez les scripts nécessaires.
2. D'ailleurs, n'oubliez pas de bien :
- coder correctement votre HTML (les titres avec des h1, h2 ; les paragraphes dans des balises p ; ...). Un code bien organisé et toujours plus facile à traiter.
- nommer correctement vos ID. Utilisez des noms qui aient du sens, facile à vous situer sur votre page.



### REMARQUES :
Vous travaillez en groupe. Organisez-vous. Communiquez (rappelez-vous les bienfaits des réunions scrum). Vous avez jusque vendredi midi pour terminer ce site.


### Cat Tax : Maru

![Maru](https://s-media-cache-ak0.pinimg.com/736x/01/db/73/01db734bfbebad88776671495bc09cf5.jpg)
