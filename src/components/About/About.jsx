import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <div className={style.container}>
        <h1 className={style.h1}>Mi primer proyecto de react.</h1>
        <p>Hola... Soy Luis Sanchez, estudiante de Desarrollo Web Full Stack, este fue mi primer proyecto utilizando las tecnologias de JavaScript, React, Redux. </p>
        <br></br>
        <p>“Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo”. Benjamin Franklin.</p>
      
    </div>
  )
}

export default About
