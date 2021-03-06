import React, { useState } from "react";
import './MainPage.css';
import MainHeader from '../components/MainHeader';
import Catalogue from '../components/Catalogue';

const MainPage = () => {
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = async (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') setSearchTerm(userInput);
  };

  return (
    <div id='mainPage-id'>
      <MainHeader />
      <div id='mainPage-input-id' className='search-div'>
        <input
          type='text'
          className='search-input'
          placeholder='Enter a show search term and press ENTER'
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Catalogue searchTerm={searchTerm} />
    </div>
  )
}

export default MainPage;