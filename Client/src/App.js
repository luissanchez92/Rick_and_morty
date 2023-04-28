import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate  } from 'react-router-dom';


const URL_BASE='http://localhost:3001/rickandmorty/character'

function App() {
   const URL = 'http://localhost:3001/rickandmorty/login'; 
   const [characters, setCharacters]= useState([])
   const [access, setAccess]= useState(false)
   const navigate= useNavigate();
   const {pathname}= useLocation();

   const login=async (userData)=>{
      try{
         const { email, password } = userData;
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access)
         access && navigate('/home');

      }catch(error){
         console.log(error.message)
      }
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access]) 

   const onSearch=async(id)=>{
      try{
         const {data} = await axios(`${URL_BASE}/${id}`)
            if (data.name && !characters.find(char=>char.id ===data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
      }catch(error){
         alert('¡No hay personaje con ese id!')
      }
   }
  
   const onClose=(id)=>{
      const filtrado= characters.filter(element=>element.id !==(id))
      setCharacters(filtrado)
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
