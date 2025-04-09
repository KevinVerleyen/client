// Importation des modules nécessaires
// "Link" est un composant de React Router permettant de créer des liens internes.
// "MainCategories", "FeaturedPosts", et "PostList" sont des composants personnalisés.
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

// Définition du composant Homepage
const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {" "}
      {/* Conteneur principal avec des classes Tailwind */}
      {/* BREADCRUMB - Barre de navigation pour montrer la localisation actuelle */}
      <div className="flex gap-4">
        <Link to="/">Home</Link> {/* Lien vers la page d'accueil */}
        <span>.</span> {/* Séparateur visuel */}
        <span className="text-blue-800">Blogs et Articles</span>{" "}
        {/* Texte actuel pour indiquer la section */}
      </div>
      {/* INTRODUCTION - Section introductive avec un titre et une description */}
      <div className="flex items-center justify-between">
        {" "}
        {/* Mise en page entre texte et bouton */}
        {/* TITRES */}
        <div className="">
          {" "}
          {/* Conteneur du titre */}
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Le blog du Dev : Mes notes et astuces indispensables.
          </h1>{" "}
          {/* Grand titre */}
          <p className="mt-8 text-md md:text-xl">
            Le développeur, ce héros silencieux qui fait fonctionner
            l&#39;internet... enfin presque.
          </p>{" "}
          {/* Sous-titre ou description */}
        </div>
        {/* ANIMATED BUTTON - Bouton animé avec un effet circulaire */}
        <Link to="write" className="hidden md:block relative">
          {" "}
          {/* Lien pour naviguer vers une page de rédaction */}
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />{" "}
            {/* Chemin circulaire pour le texte animé */}
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Mon Pense-Bête
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Pour Dev ° ° °
              </textPath>
            </text>{" "}
            {/* Texte animé autour du cercle */}
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-fuchsia-950 hover:bg-fuchsia-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>{" "}
            {/* Icône de flèche indiquant l'action */}
          </button>
        </Link>
      </div>
      {/* CATEGORIES - Section pour afficher les catégories principales */}
      <MainCategories /> {/* Composant affichant les catégories principales */}
      {/* FEATURED POSTS - Section pour afficher les articles mis en avant */}
      <FeaturedPosts /> {/* Composant affichant des articles populaires */}
      {/* POST LIST - Section pour afficher la liste des articles récents */}
      <div className="">
        <h1 className="my-b text-2xl text-gray-600">Recent Posts</h1>{" "}
        {/* Titre pour la section */}
        <PostList /> {/* Composant affichant une liste des articles récents */}
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs dans le projet
export default Homepage;
