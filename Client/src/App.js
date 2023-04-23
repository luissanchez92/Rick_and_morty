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
//const API_KEY='cca036af6911.c5e7aae1a720ce9a3148'

function App() {
   const [characters, setCharacters]= useState([])
   const [access, setAccess]= useState(false)
   const navigate= useNavigate();
   const {pathname}= useLocation();


   const EMAIL='luisjosanchez69@gmail.com'
   const PASSWORD='Luis1234'


   const login=(userData)=>{
      if(userData.email===EMAIL && userData.password===PASSWORD){
         setAccess(true)
         navigate('/home')
      }else{
         window.alert('Credenciales incorrectas')
      }
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access])

   const onSearch=(id)=> {
      axios(`${URL_BASE}/${id}`)
      .then(response=>response.data)
      .then((data) => {
         if (data.name && !characters.find(char=>char.id ===data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
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
