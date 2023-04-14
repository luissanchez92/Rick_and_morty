

const validation=(userData )=>{
    const errors={}

    if (userData.password.length<6 || userData.password.length >10){
        errors.password='Password debe contener entre 6-10 caracteres y al menos un numero.'
    }
    if(!/\d/.test(userData.password)){
        errors.password= 'Password debe contener entre 6-10 caracteres y al menos un numero.'
    }
    if (!userData.email){
        errors.email= 'Debes completar este campo.'
    }
    if (userData.email.length>35){
        errors.email= 'Correo muy extenso.'
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
        errors.email= 'Correo no valido.'
    }
    return errors;


};



export default validation;