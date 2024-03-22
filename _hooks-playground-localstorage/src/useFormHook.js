import { useState } from 'react';

export default function useFormHook(initialState) {
    const [ fields, setValues ] = useState(initialState);
    const reset = () => {
        setValues("")
    }
    return [

        fields,
        function(event) {
            setValues({
                ...fields, [event.target.id]: event.target.value
            });
        },
        reset
        
    ];
}