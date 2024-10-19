import React, { useState } from 'react';

const About: React.FC = () => {
  const [showParcours, setShowParcours] = useState(false);
  const [showScolaire, setShowScolaire] = useState(false);
  const [showPro, setShowPro] = useState(false);  
  const [showCompetences, setShowCompetences] = useState(false);

  return (
    <div className="about">
      <div className="about__container">
        <h2>À propos de moi</h2>
        <p>
          Je suis Joshua Letessier, alias Faolline, un développeur passionné par la programmation 3D et le développement de jeux vidéo.
          Actuellement en formation chez GamingCampus en troisième année.
        </p>
        <p>Je suis constament en quête de nouveaux défis dans le domaine de la programmetion et de la création d'envirronements immersifes.
          Mon objectif est de combiner technique et créativité pour créer des expériences uniques et innovantes.
          Que ce soit sur des projet Web ou des jeux vidéo, je m'efforce de repousser mes limites et d'apprendre de nouvelles technologies.
        </p>

        {/* Panneau interactif Mon Parcours */}
        <div className="panel">
          <div className="panel__header" onClick={() => setShowParcours(!showParcours)}>
            <h3>Mon parcours</h3>
          </div>
          {showParcours && (
            <div className="panel__content">
              {/* Sous-panneau Scolaire */}
              <div className="subpanel">
                <div className="subpanel__header" onClick={() => setShowScolaire(!showScolaire)}>
                  <h4>Parcours scolaire</h4>
                </div>
                {showScolaire && (
                  <div className="subpanel__content">
                    <p>
                      Après un Baccalauréat technologique STI2D, j'ai décidé de me lancer dans une formation en développement.
                      j'ai commencé par un DUT Informatique à l'IUT de Lyon 1, que j'ai obtenu en 2022.
                      J'ai ensuite intégré la formation de Tech à GamingCampus pour me spécialiser dans le développement de jeux vidéo.
                    </p>
                  </div>
                )}
              </div>

              {/* Sous-panneau Professionnel */}
              <div className="subpanel">
                <div className="subpanel__header" onClick={() => setShowPro(!showPro)}>
                  <h4>Parcours professionnel</h4>
                </div>
                {showPro && (
                  <div className="subpanel__content">
                    <p>
                     J'ai eu l'occassion lors d'un stage de travailler pour <a href='https://www.albedya.fr/'>Albédia</a>, une entrepise qui conçois un logiciel web rendant accessible l'étude climatique des batiments.
                     J'ai pu entre autre travailler sur la génération de l'environements 3D sous Three.js et sur l'optimisation des performances.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Panneau interactif Mes Compétences */}
        <div className="panel">
          <div className="panel__header" onClick={() => setShowCompetences(!showCompetences)}>
            <h3>Mes compétences</h3>
          </div>
          {showCompetences && (
            <div className="panel__content">
              <ul>
                <li>Programmation 3D</li>
                <li>Développement de jeux vidéo avec Unity, Unreal</li>
                <li>Intégration de moteurs graphiques (Three.js)</li>
                <li>Optimisation et création d'expériences interactives</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
