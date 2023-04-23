import React from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from 'react'
import style from './Favorites.module.css'

const Favorites = ({myFavorites}) => {
    const [aux, setAux]=useState(false)

    const dispatch=useDispatch()

    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
        setAux(!aux)
    }

  return (
    <div className={style.divFavorites}>
        <select onChange={handleOrder} className={style.selecOrder}>
            <option value='A' className={style.letrasOptions}>ASCENDENTE</option>
            <option value='D' className={style.letrasOptions}>DESCENDENTE</option>
        </select>

        <select onChange={handleFilter} className={style.selectFilter}>
            <option value="Male" className={style.letrasOptions}>MALE</option>
            <option value="Female" className={style.letrasOptions}>FEMALE</option>
            <option value="Genderless" className={style.letrasOptions}>GENDERLEES</option>
            <option value="unknown" className={style.letrasOptions}>UNKNOWN</option>
            <option value='allCharacter' className={style.letrasOptions}>ALL CHARACTERS</option>
        </select>
        <div className={style.card}>
            {
                myFavorites.map(({id, name, status, species, gender, origin, image})=>{
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                        />
                    )
                })
            } 

        </div>

    </div>)
}

const mapStateToProps=(state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
