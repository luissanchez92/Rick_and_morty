import style from './Card.module.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';


function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav]=useState(false);

   const handleFavorite=()=>{
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {isFav ? (<button onClick={handleFavorite} className={style.corazon}>❤️</button>
            ) : (<button onClick={handleFavorite} className={style.corazon}>🤍</button>)}
         {isFav ? (!<button onClick={()=>onClose(id)} className={style.buttonEliminar}>Eliminar</button>) : (
            <button onClick={()=>onClose(id)} className={style.buttonEliminar}>Eliminar</button>
         )}
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2 className={style.h2}>{status}</h2>
         <h2 className={style.h2}>{species}</h2>
         <h2 className={style.h2}>{gender}</h2>
         <h2 className={style.h2}>{origin}</h2>
         <img src={image} className={style.imagencard} alt='imagen' />
      </div>
   );
}


const mapStateToProps= (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps= (dispatch) => {
   return {
      addFav:(character)=> dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);