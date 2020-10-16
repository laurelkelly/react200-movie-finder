import React, { useState } from 'react';

let MovieInput = (props) => {
    const [userInput, setUserInput] = useState('');  // React hooks

    const handleInputChange = (e) => {
        const { value } = e.target;
        setUserInput(value);
        // console.log(e.target.value);
    }

    return (
        <div className='input-group mb-3 pb-3'>
            <input  
            type='text'
            className='form-control'
            id='search-term'
            placeholder='Enter search term'
            value={ userInput }
            onChange={ handleInputChange }
            />
            <div className='input-group-append'>
                <button 
                    type='submit' 
                    className='btn btn-outline-secondary'
                    onClick={ () => props.handleSubmit(userInput) }
                >Go!
                </button>
            </div>
        </div>
    );     
}

export default MovieInput;