let myFavorites=[];

const postFav=(req, res)=>{
    try{
        const character=req.body

        const characterFound= myFavorites.find(element=>element.id===character.id);

        if (characterFound)  throw Error('El personaje ya existe en favoritos')
        myFavorites.push(character)
        
        return res.status(200).json(myFavorites)
        
    }catch(error){
        return res.status(404).send(error.message)

    } 
}


const deleteFav=(req, res)=>{
    const {id}=req.params;

    const myFavoritesFiltered= myFavorites.filter(element=>element.id !== +id)
    
    return res.status(200).json(myFavoritesFiltered);
}

module.exports={postFav, deleteFav};