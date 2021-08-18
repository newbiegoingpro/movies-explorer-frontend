import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isEmail, setEmailError] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);  
    const [isFormValid, setFormValidity] = useState(false); 
    useEffect(() => {
        for (const validation in validations) {        
            switch (validation) {
                case 'isEmpty':
                    
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break
                case 'isEmail':
                    
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break
                case 'minLength':
                    
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break
                case 'maxLength':
                    
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break

                }
        }
    }, [validations, value]
    )
    useEffect(() => {
        if(isEmail || isEmpty || maxLengthError || minLengthError){
            setFormValidity(false);
        } else { 
            setFormValidity(true);
        }
    }, [isEmail, isEmpty, maxLengthError, minLengthError])
    return{
        minLengthError,
        maxLengthError,
        isEmail,
        isEmpty,
        isFormValid
    }
}
export default useValidation;