import React from 'react';
import heImage from './he.jpg';
const Folders = ({ onSelectFolder }) => {
  const folders = ['Inbox', 'Sent', 'Starred', 'Archive', 'Drafts', 'Trash'];

  return (
    <div className="folders">
      <ul>
        {folders.map((folder, index) => (
          <li key={index} onClick={() => onSelectFolder(folder)} style={{ fontFamily: 'cursive'}}>
            {folder} <br></br><br></br>
          </li>
        ))}
      </ul>
      <br></br><br></br><br></br><br></br>
      <div style={{ manrginTop: '10%',display: 'flex'}}>
      <img style={{ marginRight: '3%', borderRadius: '100%', width: "40px", height: "40px" }} src={heImage}/>
      <p>Michael Joshua</p> <b></b><b></b>
      </div>
    </div>
  );
};

export default Folders;



