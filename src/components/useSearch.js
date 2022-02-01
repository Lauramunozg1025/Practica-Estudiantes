import React, { useState } from 'react';

const useSearch = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value 
        });

    }

  return [ values, handleInputChange]
};

export default useSearch;
