import React from 'react';
import './SearchBox.css'; 
import { userContext } from '../context/context';
import axios from 'axios';
import { useContext } from 'react';

function SearchBox() {
    const [searchTerm, setSearchTerm] = React.useState('');

    const usersContext = useContext(userContext);

    async function handleSubmit(event) {
      event.preventDefault();
      // You can add any additional logic here if needed
      console.log("Search submitted:", searchTerm); 
      try{
            const response = await axios.get(`http://localhost:8080/user/?param=${searchTerm}`);
            console.log("Response status:", response);
            if (response.status === 200) {
                const users = response.data;
                console.log("Fetched users:", users);
                usersContext.setUsers(users);
                console.log("Search results:", users);
            } else {
                console.error("Error fetching search results:", response.statusText);
            }
      }
      catch(error){
        console.error("Error in search submission:", error);
      }

    }
    
  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
       className='search-input'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit" className="search-button">🔍</button>
    </form>
  );
}

export default SearchBox;