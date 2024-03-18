import React, { useState } from 'react';
import "./Auto.css";

export default function Autocomplete(props) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([...props.arr]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sample arrays of values


  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    filterSuggestions(value);
  };

  const filterSuggestions = (value) => {
    const filteredSuggestions = [...props.arr].filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleItemClick = (value) => {
    setInputValue(value);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <div className='auto-inner'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={props.placeholder}
        />
        <img
          src={process.env.PUBLIC_URL + '/Navbar/dowm-arrow.png'}
          alt="Down Arrow"
          className="down-icon"
          onClick={() => setShowSuggestions(!showSuggestions)}
        />
      </div>
      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


