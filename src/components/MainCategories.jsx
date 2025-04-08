// import { Link } from "react-router-dom";

// const MainCategories = () => {
//   return (
//     <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
//       {/* links */}
//       <div className="flex-1 flex items-center justify-between flex-wrap">
//         <Link
//           to="/posts"
//           className="bg-fuchsia-950  text-white rounded-full px-4 py-2"
//         >
//           All Posts
//         </Link>
//         <Link
//           to="/posts?cat=web-design"
//           className="hover:bg-blue-50  rounded-full px-4 py-2"
//         >
//           Web Design
//         </Link>
//         <Link
//           to="/posts?cat=development"
//           className="hover:bg-blue-50  rounded-full px-4 py-2"
//         >
//           Development
//         </Link>
//         <Link
//           to="/posts?cat=databases"
//           className="hover:bg-blue-50  rounded-full px-4 py-2"
//         >
//           Databases
//         </Link>
//         <Link
//           to="/posts?cat=seo"
//           className="hover:bg-blue-50  rounded-full px-4 py-2"
//         >
//           Search Engines
//         </Link>
//         <Link
//           to="/posts?cat=marketing"
//           className="hover:bg-blue-50  rounded-full px-4 py-2"
//         >
//           Marketing
//         </Link>
//       </div>
//       <span className="text-xl font-medium">|</span>
//       {/* search */}
//       <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           width="20"
//           height="20"
//           fill="none"
//           stroke="gray"
//         >
//           <circle cx="10.5" cy="10.5" r="7.5" />
//           <line x1="16.5" y1="16.5" x2="22" y2="22" />
//         </svg>
//         <input
//           type="text"
//           placeholder="Search a post..."
//           className="bg-transparent"
//         />
//       </div>
//     </div>
//   );
// };

// export default MainCategories;

// Importation du module "Link" depuis React Router.
// "Link" permet de créer des liens internes dans l'application.
import { Link } from "react-router-dom";

// Définition du composant MainCategories
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* Conteneur principal : une barre de catégories avec un style arrondi et une ombre */}

      {/* LINKS - Liens vers différentes catégories */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts" /* Lien vers la page "Tous les articles" */
          className="bg-fuchsia-950 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design" /* Lien vers les articles sur le "Web Design" */
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development" /* Lien vers les articles sur le "Développement" */
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases" /* Lien vers les articles sur les "Bases de données" */
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo" /* Lien vers les articles sur le "SEO" */
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing" /* Lien vers les articles sur le "Marketing" */
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>

      {/* Séparateur visuel entre les liens et la zone de recherche */}
      <span className="text-xl font-medium">|</span>

      {/* SEARCH - Zone de recherche pour les articles */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" /> {/* Icône de loupe */}
          <line x1="16.5" y1="16.5" x2="22" y2="22" />{" "}
          {/* Ligne pour compléter la loupe */}
        </svg>
        <input
          type="text" /* Champ de recherche pour saisir un terme */
          placeholder="Search a post..." /* Texte indicatif */
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser dans d'autres parties du projet
export default MainCategories;
// Résumé des fonctionnalités :
// Navigation interne : Liens vers différentes catégories d'articles avec des styles et des états au survol.

// Recherche intégrée : Une barre de recherche avec une icône de loupe pour améliorer l'expérience utilisateur.

// Design responsive : Utilisation de classes Tailwind CSS pour le style et l'adaptabilité (visible uniquement sur les écrans moyens et plus grands).
