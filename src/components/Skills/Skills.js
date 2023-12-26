import React from 'react';
import './Skills.css'
import react from '../../assests/react.png'
import express from '../../assests/express-js.png'
import mongodb from '../../assests/mongodb.png'
import nodejs from '../../assests/node-js.png'

const images = [
  {
    title: "React.js",
    description: "React.js est une bibliothèque JavaScript populaire utilisée pour construire des interfaces utilisateur interactives. Elle permet de développer des applications web évolutives avec des mises à jour d'interface en temps réel.",
    img: react // Utilisez la variable d'image importée directement
  },
  {
    title: "Express",
    description: "Express est un framework minimaliste pour construire des applications web avec Node.js. Il simplifie la création de serveurs web en offrant une grande flexibilité et des fonctionnalités puissantes pour construire des API robustes.",
    img: express // Utilisez la variable d'image importée directement
  },
  {
    title: "MongoDB",
    description: "MongoDB est une base de données NoSQL orientée document. Elle offre une scalabilité horizontale, une flexibilité de schéma et est largement utilisée pour stocker des données dans des applications web modernes.",
    img: mongodb // Utilisez la variable d'image importée directement
  },
  {
    title: "Node.js",
    description: "Node.js est un environnement d'exécution JavaScript côté serveur. Il permet aux développeurs d'écrire du code JavaScript sur le serveur, facilitant ainsi la création d'applications web rapides et extensibles.",
    img: nodejs // Utilisez la variable d'image importée directement
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled web developer passionate with experience</span>
      <div className='skillBars'>
        {images.map((image, index) => (
          <div className='skillBar' key={index}>
            <img src={image.img} alt={image.title} className='skillBarImg' />
            <div>
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
