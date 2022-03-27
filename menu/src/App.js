import './App.css';
import React, {useState} from 'react'
import items from './components/data'
import Menu from './components/Menu';
import Categories from './components/Categories';

function App() {

  const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <div className="App">
      <section className='menu-section'>
        <div className='title'>
          <h1>Our Menu</h1>
          <div className='underline'></div>
        </div>
        <Categories categories = {categories} filterItems = {filterItems} />
      </section>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
