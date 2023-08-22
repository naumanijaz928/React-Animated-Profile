import { useEffect, useState } from 'react';
import Logon from '../../assets/images/N.png';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { TypeAnimation } from 'react-type-animation';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['u', 'm', 'a', 'n', ' ', 'i', 'j', 'a', 'z']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>

          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={Logon} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / React-Js Developer / MERN Stack</h2>
        <TypeAnimation
          sequence={[
            'MERN-Stack Developer', // Types 'One'
            4000, // Waits 1s
            'React-Js Developer', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            'Front-End Developer',
            3000,
            'Team-Player',
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
        />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
