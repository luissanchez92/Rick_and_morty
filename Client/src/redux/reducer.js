import { ADD_FAV, REMOVE_FAV,FILTER, ORDER } from "./actions_types"


const initialState={
    myFavorites: [],
    allCharacters:[]    
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return {
                ...state, myFavorites: action.payload, allCharacters: action.payload 
            };

        case REMOVE_FAV:
            return {
                ...state, myFavorites: action.payload,
            };

        case FILTER:
            const allCharactersFilter= state.allCharacters.filter(
                element=>element.gender ===action.payload
            )
            return {
                ...state, 
                myFavorites: 
                    action.payload ==='allCharacter'
                    ? [...state.allCharacters ]
                    : allCharactersFilter
            }

        case ORDER:
            const allCharactersCopy=[...state.allCharacters]
            return {
                ...state,
                myFavorites: 
                    action.payload==='A'
                    ? allCharactersCopy.sort((a,b)=>a.id - b.id)
                    : allCharactersCopy.sort((a,b)=>b.id - a.id)
            }
            
        default:
            return {...state}
    }
}

export default rootReducer;