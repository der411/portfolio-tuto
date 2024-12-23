import RatingStars from './RatingStars';

function Competences( { competences, competencesLearning } ) {
  return (
    <section
      id="competences"
      className="p-5 m-5 mb-20 bg-card dark:bg-custom-gray border dark:dark:border-border-card rounded-b-lg"
      style={{ backgroundImage: `url('/assets/banner.webp')`, backgroundSize: 'cover' }}
    >
      <h2 className="text-center text-black dark:text-black text-2xl mb-5">
      <i className="fa fa-laptop-code mr-2"></i>
        Mes compétences</h2>
      <div className="text-center text-black dark:text-black my-12 leading-7 bg-vscode">
        <p className='text-xl'>Développement d'applications web front-end et back-end.</p>
      </div>
      <div className="flex flex-wrap justify-center text-black dark:text-black">
        {competences.map((competence) => (
          <div key={competence.id} className="m-2 flex flex-col items-center">
            <img
              src={competence.icon}
              alt={`${competence.name} icon`}
              className="m-5 w-10 h-10 object-contain"
            />
            <RatingStars rating={competence.rating} />
            <div className="m-5 w-16 flex flex-col items-start text-2xs md:text-xs">
              <p className='font-bold'>{competence.name}</p>
              <p>{competence.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center text-black dark:text-black text-xl mt-20 mb-5">En cours d'apprentissage</h3>
      <div className="flex flex-wrap justify-center text-black dark:text-black">
        {competencesLearning.map((competenceLearning) => (
          <div key={competenceLearning.id} className="m-2 flex flex-col items-center">
            <img
              src={competenceLearning.icon}
              alt={`${competenceLearning.name} icon`}
              className="m-5 mb-0 w-10 h-10 object-contain"
            />
            <div className="m-5 w-16 flex flex-col items-start text-2xs md:text-xs">
              <p className='font-bold'>{competenceLearning.name}</p>
              <p>{competenceLearning.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
