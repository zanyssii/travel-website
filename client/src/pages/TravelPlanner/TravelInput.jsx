import React, { useState } from 'react';

const TravelInput = props => {
    const [inputValue, setInputValue ] = useState('');
    return (
        <div>
            <input 
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default TravelInput;