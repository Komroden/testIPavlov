import  {useEffect, useState} from 'react';

export const useValidation = (value,validations) => {
    const [isEmpty,setEmpty]=useState(true);
    const [minLengthError,setMinLengthError]=useState(false);
    const [maxLengthError,setMaxLengthError]=useState(false);
    const [emailError,setEmailError]=useState(false);
    const [phoneError,setPhoneError]= useState(false)
    const [numberError,setNumberError]= useState(false)
    const [inputValid,setInputValid]= useState(false)
useEffect(()=>{
    for (const validation in validations) {
        switch (validation) {
            case 'minLength':
                value.length<validations[validation]?setMinLengthError(true):setMinLengthError(false)
                break;

            case 'isEmpty':
                value? setEmpty(false):setEmpty(true);
                break;
            case 'maxLength':
                value.length>validations[validation]?setMaxLengthError(true):setMaxLengthError(false)
                break;
            case 'isEmail':
                const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                regEmail.test(String(value).toLowerCase())? setEmailError(false):setEmailError(true)
            break;
            case 'isPhone':
                // eslint-disable-next-line no-useless-escape
                const regPhone= /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
                regPhone.test(value)? setPhoneError(false):setPhoneError(true)
                break;
            case 'isNumber':
                // eslint-disable-next-line no-useless-escape
                const number= /^[0-9]*[.,][0-9]+$/
                number.test(value)? setNumberError(false):setNumberError(true)
                break;
            default :
                break;

        }
    }

},[validations,value])

    useEffect(()=>{
        if(isEmpty||minLengthError||maxLengthError||emailError||phoneError){
            setInputValid(false)
        }else {
            setInputValid(true)
}
    },[isEmpty,minLengthError,maxLengthError,emailError,phoneError])
    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        phoneError,
        inputValid,
        numberError
    }
};

