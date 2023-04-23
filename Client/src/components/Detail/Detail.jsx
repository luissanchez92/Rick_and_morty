import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Detail.module.css'


const URL_BASE='http://localhost:3001/rickandmorty/character'
//const API_KEY='cca036af6911.c5e7aae1a720ce9a3148'


const Detail = () => {
  const {id}=useParams();

  const [character, setCharacter]=useState({})

  useEffect(() => {
    axios(`${URL_BASE}/${id}`)
    .then(response=>response.data)
    .then((data) => {
       if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
  }, [id]);


  return (
    <div className={style.container}>

      <div className={style.containerdos}>
        {
          character.name ? (
            <>
              <h2>{character.name}</h2>
              <h2>{character.status}</h2>
              <h2>{character.species}</h2>
              <h2>{character.gender}</h2>
              <h2>{character.origin?.name}</h2>
              <img src={character?.image} alt={character?.name} className={style.imagendetail}/>
            </>
          ):(
            <></>  
          )
        }
      </div>

    </div>
  )
}

export default Detail
