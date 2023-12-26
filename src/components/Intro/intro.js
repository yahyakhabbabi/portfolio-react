import React from 'react'
import './intro.css'
import bg from '../../assests/Image.png'
import btnImg from '../../assests/hireme.png'
import {Link} from 'react-scroll';

export default function Intro() {
  return (
    <div>
      <section id='intro'>
        <div className='introContext'>
          <span className='hello'>Hello,</span>
          <span className='introText'> I'm <span className='introName'>Yahya</span> <br /> Web Developer</span>
          <p className='introPara'>I am a motivated junior developer, eager to embark on a fulfilling career<br/> in development.
           I aspire to join a dynamic company, apply my skills,<br /> and advance rapidly. My goal is to contribute to challenging projects,<br /> learn from experts,
           and grow my career in software development.</p>
           <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
      <div>  <img src={bg} alt='profile' className='bg' /></div>
      </section>
      
    </div>
  )
}
