import React from 'react'
import { FaHeart, FaArrowDown, FaSearch, FaArrowUp, FaAngleDown }
  from 'react-icons/fa';

function Home() {
  return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'>
            <div className='card_icon'><img src="/img/Book.png" /></div>
            </div>
            <div className='card_icon1'>
              <h3>COMPUTER SCIENCE</h3>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'><img src="/img/Book.png" /></div>
            <div className='card_icon1'>
              <h3>MECH.ENG.</h3>
              
            </div>
          </div>

        </div>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'><img src="/img/Book.png" /></div>
            <div className='card_icon1'>
              <h3>ELECTRICAL</h3>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'><img src="/img/Book.png" /></div>
            <div className='card_icon1'>
              <h3>CIVIL ENG.</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;