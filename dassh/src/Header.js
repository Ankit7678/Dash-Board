import React from "react";
import { FaHeart, FaArrowDown,FaSearch,FaCar,FaArrowUp,FaAngleDown }
from 'react-icons/fa';

function Header({OpenSidebar}) {
    return (

        <header className='header'>
            <div className='menu-icon'>
                 
                <FaCar className='icon' onClick={OpenSidebar} />
        </div>
            <div className='header-left'>
            <div className='main-title'>
          <h3>DASHBOARD</h3>
        </div> 
            </div>
            <div className='header-right'>
          {/* <input placeholder=" Search..">
          </input>  */}
          <div class="search">
            <button class="search-button">
              <FaSearch className='REicons-s' />
              Search
            </button>
          </div>
            </div>
        </header>

    )
}

export default Header;