import useValidation from "./useValidation";
import { useState } from "react";
const useInput = (initialValue, validations) => {
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);
    const validity = useValidation(value, validations);
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setIsDirty(true);
    }

    return {
        value,
        onBlur,
        onChange, 
        isDirty, 
        ...validity
    }
}
export default useInput;