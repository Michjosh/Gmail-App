// export default Items;

// import React, { useState } from 'react';
// import '../App.css';

// const Items = ({ selectedFolder, items, onItemClick }) => {
// const [currentPage, setCurrentPage] = useState(0);

// const itemsPerPage = 5;
// const totalPages = Math.ceil(items.length / itemsPerPage);

// const handleClickNext = () => {
// setCurrentPage((prevPage) => prevPage + 1);
// };

// const handleClickPrev = () => {
// setCurrentPage((prevPage) => prevPage - 1);
// };

// const startIndex = currentPage * itemsPerPage;
// const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

// return (
// <div className="items">
// <h2 style={{ fontFamily: 'cursive'}}>{selectedFolder}</h2>
// <div style={{marginTop: '2%'}}>
// {currentPage > 0 && (
// <button style={{ marginTop: '5%', boxShadow: 'white', padding: '1% 2% 1% 2%', borderRadius: '5px', backgroundColor: 'blue', color: 'whitesmoke', border: '3%'}} onClick={handleClickPrev}>Previous list of messages</button>
// )}
// {currentPage < totalPages - 1 && (
// <button style={{ marginTop: '5%', boxShadow: 'white', padding: '1% 2% 1% 2%', borderRadius: '5px', backgroundColor: 'blue', color: 'whitesmoke', border: '3%'}} onClick={handleClickNext}>Next list of messages</button>
// )}
// </div>
// <ul>
// {visibleItems.map((item, index) => (
// <li key={index} onClick={() => onItemClick(item)} style={{ fontFamily: 'cursive'}}>
// {item.title} <br></br><br></br>
// </li>
// ))}
// </ul>
// </div>
// );
// };

// export default Items;


import sheImage from './she.jpg';
import React, { useState } from 'react';
import '../App.css';

const Items = ({ selectedFolder, items, onItemClick }) => {
const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (event) => {
setSearchTerm(event.target.value);
};

const filteredItems = items.filter((item) =>
item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<div  className="items">
  <div style={{ height: '16.5vh', width: '20vw', backgroundColor: 'white', marginTop: '2.4%', marginLeft: '-2%', position: 'fixed', fontFamily: 'cursive'}}>
  <h2 style={{}}>{selectedFolder}</h2>
<input 
     className="input"
     type="text"
     placeholder="Search..."
     value={searchTerm}
     onChange={handleSearchChange}
   />
  </div>
<ul style={{ marginTop: '60%'}}>
{filteredItems.map((item, index) => (
<li key={index} onClick={() => onItemClick(item)} style={{ fontFamily: 'cursive'}}>
<img style={{ marginRight: '3%',borderRadius: '100%', width: "30px", height: "30px" }} src={sheImage}/>
{item.title} 
<br></br><br></br>
</li>
))}
</ul>
</div>
);
};

export default Items;