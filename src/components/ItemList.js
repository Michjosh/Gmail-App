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