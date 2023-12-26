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
      <h2 className='workstitle'>My portfolio</h2>
      <span className='workDesc'>I take more information for this site. I help with things for my work, and I want to thank myself for this effort.</span>
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
