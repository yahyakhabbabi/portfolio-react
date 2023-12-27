import React from 'react';
import './Portfolio.css';
import store from '../../assests/store.png';
import dashboard from '../../assests/dashboard.png';


const projects = [
  {
    image: store,
    title: 'Store Project',
    description: 'An e-commerce store project showcasing various products.',
    reviewLink: 'https://example.com/store-review',
    codeLink: 'https://github.com/example/store',
  },
  {
    image: dashboard,
    title: 'Dashboard Project',
    description: 'A data visualization dashboard for analytics purposes.',
    reviewLink: 'https://example.com/dashboard-review',
    codeLink: 'https://github.com/example/dashboard',
  },
  // Add more project objects here...
];

export default function Portfolio() {
  return (
    <section id="works">
      <div>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>
          Welcome to my portfolio! Here, I've gathered a collection of my work that represents my dedication and passion. Each project reflects not only my skills but also my commitment to delivering excellence. I've poured my heart and soul into these endeavors, constantly pushing the boundaries to achieve more. This portfolio is a testament to my growth, and I'm thrilled to share it with you. Thank you for taking the time to explore and appreciate the effort behind each creation.
        </span>
      </div>
      <div className='worksImgs'>
        {projects.map((project, index) => (
          <div key={index} className={`workContainer ${index % 2 === 0 ? 'workEnterFromLeft' : 'workEnterFromRight'}`}>
            <div className='imageWrapper'>
              <img src={project.image} alt={`Work ${index}`} className='workImg'/>
              <div className='overlay'>
                <a href={project.reviewLink} target='_blank' rel='noopener noreferrer' className='workBtn'>Review</a>
                <a href={project.codeLink} target='_blank' rel='noopener noreferrer' className='workBtn'>Code</a>
              </div>
            </div>
            <div className='projectInfo'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='workBtn'>See More</button>
    </section>
  );
}
