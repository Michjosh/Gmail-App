
import React, { useState } from 'react';
import sheImage from './components/she.jpg';
import './App.css';
import Folders from './components/FolderList';
import Items from './components/ItemList';

const App = () => {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);

  const fetchItems = async (folder) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch items from JSONPlaceholder API');
      }
      const data = await response.json();
      console.log('Retrieved data:', data); 
      const mappedItems = data.map((item) => ({
        id: item.id,
        folder: folder,
        title: item.title,
        description: item.body,
      }));
      console.log('Mapped items:', mappedItems); 
      
      const filteredItems = mappedItems.filter(item => item.folder === folder);
      console.log('Filtered items:', filteredItems); 
      
      return filteredItems;
    } catch (error) {
      console.error(error);
      return []; 
    }
  };

  const folder = 'Inbox';
fetchItems(folder)
  .then(items => {
    console.log(items); 
  })
  .catch(error => {
    console.error(error);
  });
  

  const handleSelectFolder = async (folder) => {
    setSelectedFolder(folder);
    setSelectedItem(null);
    try {
      const fetchedItems = await fetchItems(folder);
      setItems(fetchedItems);
    } catch (error) {
      console.error(error);
      setItems([]);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowReplyForm(false);
  };

  const handleReplyClick = () => {
    setShowReplyForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSelectedItem = {
      ...selectedItem,
      reply: replyText
    };
    setSelectedItem(updatedSelectedItem);
    setShowReplyForm(false);
  };

  return (
    <div className='main'>
       <div className='top-nav'>
</div>
      <div className="app">
          <div className='folder'>
            <p className='gmail'>Gmail</p>
            <Folders onSelectFolder={handleSelectFolder} />
          </div>
          <Items className="items" selectedFolder={selectedFolder} items={items} onItemClick={handleItemClick} />
        {selectedItem && (
            <div style={{ marginTop: '5%'}} className="item-details">
              <img style={{ marginLeft: '3%', marginTop: '5%', borderRadius: '100%', width: "50px", height: "50px" }} src={sheImage} alt="She" />
              <h3 style={{ marginLeft: '3%' }}>{selectedItem.title}</h3>
              <p style={{ marginLeft: '3%' }}>{selectedItem.description}</p>
              <br /><br />
              {showReplyForm ? (
                <form style={{ marginLeft: '3%' }} onSubmit={handleSubmit}>
                  <label htmlFor="reply">Reply:</label> <br /><br />
                  <textarea
                    style={{ width: '500px', height: '150px' }}
                    id="reply"
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                  /><br /><br />
                  <button style={{ fontFamily: 'cursive', marginLeft: '3%', boxShadow: 'white', padding: '1% 2% 1% 2%', borderRadius: '5px', backgroundColor: 'blue', color: 'whitesmoke', border: '3%' }} type="submit">Send</button>
                </form>
              ) : (
                <button style={{ fontFamily: 'cursive', marginLeft: '3%', boxShadow: 'white', padding: '1% 2% 1% 2%', borderRadius: '5px', backgroundColor: 'blue', color: 'whitesmoke', border: '3%' }} onClick={handleReplyClick}>Reply</button>
              )}
              {selectedItem.reply && <p style={{ marginLeft: '3%' }}>{selectedItem.reply}</p>}
              <button style={{ fontFamily: 'cursive', boxShadow: 'white', padding: '1% 2% 1% 2%', borderRadius: '5px', marginLeft: '3%', backgroundColor: 'blue', color: 'whitesmoke', border:'3%' }}>Forward</button>
            </div>
        )}
      </div>
      </div>
  );
};

export default App;
