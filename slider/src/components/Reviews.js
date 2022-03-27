import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function Reviews() {
    const [user, setUser] = useState(data)
    const [index, setIndex] = useState(0)

    const prevClickHandler = () =>{
      if(index === 0)
        setIndex(data.length - 1)
      else
        setIndex(prevIndex => prevIndex - 1)
    }    

    const nextClickHandler = () =>{
      if(index === data.length - 1)
        setIndex(0)
      else
        setIndex(prevIndex => prevIndex + 1)
    }    
    
  return (
    <div className='container'>
        <header className='heading'>
            <span className='slash'>/</span>Reviews
        </header>
        <div className='reviews'>
          <img className='user-img' src={user[index].image}></img>
          <p className='user-name'>{user[index].name}</p>
          <p className='user-title'>{user[index].title}</p>
          <p className='user-review'>{user[index].quote}</p>
          <FaQuoteRight className='icon' />
          <div>
            <FiChevronLeft className='prev' onClick={() => prevClickHandler()} />
            <FiChevronRight className='next' onClick={() => nextClickHandler()} />
          </div>
        </div>
    </div>
  )
}

export default Reviews