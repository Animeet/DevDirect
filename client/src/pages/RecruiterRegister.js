import { redirect } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function recruiterRegister(props){

    const [registerType, setRegisterType] = useState('student');
    const [errorMessage, setErrorMessage] = useState('');
    
    const [employerFormData, setEmployerFormData] = useState ({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        business_name: "",
        business_address: "",
    })

    return(
        <h1>hello</h1>
    );
}
