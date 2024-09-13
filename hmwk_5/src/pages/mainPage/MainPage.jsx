import React, { useState, useRef } from 'react';

export const MainPage = () => {

  const inputRef = useRef(null);

  const [names, setNames] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);


  const handleInputChange = () => {
    setIsInputEmpty(!inputRef.current.value.trim());
  };

  const handleAddName = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      setNames([...names, inputValue]);
      inputRef.current.value = '';
      setIsInputEmpty(true);
    }
  };

  const handleEditName = (index) => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      const updatedNames = names.map((name, i) => (i === index ? inputValue : name));
      setNames(updatedNames);
      inputRef.current.value = '';
      setIsInputEmpty(true);
    }
  };

  return (
    <div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Введите имя"
        onChange={handleInputChange}
      />
      <button onClick={handleAddName} disabled={isInputEmpty}>
        ADD
      </button>

      {names.length === 0 ? (
        <p>THE LIST IS EMPTY</p>

      ) : (
        
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {name}
              <button
                onClick={() => handleEditName(index)}
                disabled={isInputEmpty}
              >
                CHANGE
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};
