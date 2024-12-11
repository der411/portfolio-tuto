import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

function Banner() {

  // État pour savoir si l'écran est un mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Taille d'écran pour mobile
    };

    // Première vérification de la taille de l'écran
    handleResize();

    // Écoute les changements de taille de l'écran
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fonction pour télécharger le CV
  function handleDownload() {
    const link = document.createElement('a');
    link.href = '/documents/vgomcreation-offre-de-noel.png';
    link.download = 'vgomcreation-offre-de-noel.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="bg-card text-black p-10 m-5 mt-20 pb-10 shadow-lg flex flex-col items-center relative rounded-xl dark:bg-custom-gray overflow-hidden"
      style={{ backgroundImage: 'url(/assets/banner.webp)', backgroundSize: 'cover'}}
    >
      {!isMobile}
      <div className="absolute top-0 right-2 p-4 z-10">
        <DarkModeToggle />
      </div>
      <div className="flex flex-col relative mt-20 z-10 2xl:mt-40 typewriter-wrapper">
        <p className="text-center max-w-4xl text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl dark:text-black pb-6 flex items-baseline typewriter">
           Site de présentation de votre activité pour seulement 89 € !
        </p>
      </div>

      <div className="flex justify-between w-full px-1 relative z-10 mt-10 sm:px-5">
  <a
    href="https://github.com/der411"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center dark:text-white dark:hover:text-gray-400 text-black hover:text-black hover:text-opacity-60 transition duration-300"
    aria-label="Voir mon GitHub"
  >
    <img
      src="../../assets/img-banner.svg"
      alt="GitHub Logo"
      className="w-20 h-20 md:w-28 md:h-28 cursor-pointer rounded-full"
    />
  </a>
        <button
          onClick={handleDownload}
          aria-label="Télécharger mon CV au format PDF"
          className="flex justify-center text-icon-git w-20 h-20 md:w-28 md:h-28 border hover:border-opacity-60 border-red-700 dark:border-black dark:hover:border-gray-400 rounded-full flex-col items-center gap-1 text-black hover:text-opacity-60 transition duration-300 dark:text-black dark:hover:text-gray-400"
        >
          <i className="fa-solid fa-cloud-arrow-down text-xl md:text-5xl"></i>
          <span className='text-md md:text-lg text-green-900 lg:text-xl'>Brochure</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
