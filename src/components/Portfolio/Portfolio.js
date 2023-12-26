import React from 'react';
import './Portfolio.css';
import store from '../../assests/store.png';
import dashboard from '../../assests/dashboard.png';
import facture from '../../assests/facture.jpg';
import store2 from '../../assests/store2.avif'

export default function Portfolio() {
  // Array of image URLs from Unsplash as placeholders
  const imageArray = [
    store,
    store2,
    dashboard,
    store2,
  ];

  return (
    <section id="works">
<div>
  <h2 className='workstitle'>My Portfolio</h2>
  <span className='workDesc'>
    Welcome to my portfolio! Here, I've gathered a collection of my work that represents my dedication and passion. Each project reflects not only my skills but also my commitment to delivering excellence. I've poured my heart and soul into these endeavors, constantly pushing the boundaries to achieve more. This portfolio is a testament to my growth, and I'm thrilled to share it with you. Thank you for taking the time to explore and appreciate the effort behind each creation.
  </span>
</div>
      <div className='worksImgs'>
        {imageArray.map((imageUrl, index) => (
          <div key={index} className='workContainer'>
            <div className='imageWrapper'>
              <img src={imageUrl} alt={`Work ${index}`} className='workImg'/>
              <div className='overlay'>
                <button className='workBtn'>Review</button>
                <button className='workBtn'>Code</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='workBtn'>See More</button>
    </section>
  );
}
