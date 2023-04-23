import React from 'react'
import style from './Form.module.css'
import { useState } from 'react'
import validation from './validation'



const Form = ({login}) => {

    const [userData, SetUserData]=useState({
        email:'',
        password:''
    });

    const [errors, setErrors]=useState({});

    const handleChange=(event)=>{
        const property= event.target.name;
        const value= event.target.value;

        SetUserData({...userData,[property]:value})
        setErrors(validation({...userData,[property]: value}))
        
    };

    const handleSubmit=(event)=>{
        event.preventDefault()
        login(userData)

    }


  return (
    <form className={style.containerForm} onSubmit={handleSubmit} >
        <div className={style.divform}>
            <h2>Ingresa tus datos</h2>
            <label htmlFor='email'>Email: </label>
            <input
                type='email'
                name='email'
                value={userData.email}
                placeholder='Email'
                onChange={handleChange}
                className={errors.email ? style.invalido : style.valido}
            />
            <br></br> 
            <span className={style.alertValidacion}>{errors.email}</span>
            <br></br>

            <label htmlFor='password'>Password: </label>
            <input
                type='password'
                name='password'
                value={userData.password}
                placeholder='Password'
                onChange={handleChange}
                className={errors.password ? style.invalido : style.valido}
            />
            <br></br>
            <span className={style.alertValidacion}>{errors.password}</span>
            <br></br>

            <button className={style.buttonSubmit}>SUBMIT</button>

        </div>


    </form> 
  )
}

export default Form
