import React, { useState, useEffect } from "react";
import './MainPage.css';
import Show from "../components/Show";
import SearchService from "../services/searchService";

const showSearch = async (searchValue) => {
  const response = await SearchService.get(searchValue);
  if (response.ok) {
    const responseJson = await response.json();
    return responseJson;
  }
  return [];
};

const MainPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    showSearch(searchTerm).then((res) => {
      setShows(res);
    });
  }, [searchTerm]);

  return (
    <body className='App-body'>
      <input
        className='searchBar'
        placeholder='Enter a show search term'
        value={searchTerm}
        onChange={handleChange}
      />
      <div className='Shows-div'>
        {shows.map(show => <Show show={show} /> )}
      </div>
    </body>
  )
}

export default MainPage;