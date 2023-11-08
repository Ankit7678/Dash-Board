import React from "react";

function StudentsData() {
    // studentsData.js
const StudentsData = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
    // Add more students here
  ];

}
return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'>
             
            </div>
            <div className='card_icon1'>
              <h6>Earning</h6>
              <h3>$198K</h3>
              <h6><FaArrowUp className='REicons' /><span1>37.8%</span1> this month</h6>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'><img src="/img/Book.png" /></div>
            <div className='card_icon1'>
              <h6>Earning</h6>
              <h3>$198K</h3>
              <h6><FaArrowDown className='REicons2' /><span2>2%</span2> this month</h6>
            </div>
          </div>

        </div>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'><img src="/img/Note.png" /></div>
            <div className='card_icon1'>
              <h6>Earning</h6>
              <h3>$198K</h3>
              <h6><FaArrowDown className='REicons2' /><span2>2%</span2> this month</h6>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <div className='card_icon'><img src="/img/Bag.png" /></div>
            <div className='card_icon1'>
              <h6>Earning</h6>
              <h3>$198K</h3>
              <h6><FaArrowUp className='REicons' /><span1>11%</span1> this month</h6>
            </div>
          </div>
        </div>
      </div>


      <div className='graph'>

        <div className='charts'>
          <div className='Qua'>
            <div class="card-u">
              <h2>Overview</h2>
              <h6>Monthly Earning</h6>
            </div>
            <div class="card-u1">
              {/* <FaAngleDown className='fefw'/> */}
              <button class="search-button">
                Quality <FaAngleDown className='Sidebar-icons-brand-Q' />
              </button>
            </div>
          </div>

         
        </div>
        <div className="P-Chart">
          <div class="card-u">
            <h2>Customers</h2>
            <h6>Customers that buy products</h6>
          </div>
         
        </div>
      </div>





      <div className='leg'>
        <div class="container-leg">

          <div class="left-part-leg">
            <div class="notes-leg">
              <h3>Product Sell</h3>
            </div>
          </div>

          <div class="right-part-leg">
            <div class="section1-leg">
              {/* <BsSearch className='icon' /> */}
              <button class="search-button">
                <FaSearch className='REicons-s' />
                Search
              </button>
              <div className='b'><button class="search-button">
                <FaAngleDown className='Sidebar-icons-brand1' />
                Last 30 days
              </button></div>

            </div>
          </div>
        </div>

        <div class="container1-leg">
          <div class="left-part1-leg">
            <div class="notes21-leg">
              <h6>Porduct Name</h6>

            </div>
          </div>


          <div class="right-part1-leg">
            <div class="section01-leg">
              <h6>Stock</h6>

            </div>
            <div class="section011-leg">
              <h6>Price</h6>

            </div>
            <div class="section012-leg">
              <h6>Total sales</h6>

            </div>
          </div>
        </div>
      </div>


      <div className='man'>
        <div class="container-man">

          <div class="left-part-man">
            {/* */}
            <div class="notes1-man">
              {/* <img class="picture" src="your-image.jpg" alt="Your Picture">  */}

              <img src="/img/Abs.png" />
            </div>
            <div class="notes2">
              <h3>Abstract 3D</h3>
              <h6>Lorem ipsum dolar sit amet consectetur adiipicing elit</h6>

            </div>
          </div>


          <div class="right-part1">
            <div class="section1">
              <p class="normal">32 in Stock</p>

            </div>
            <div class="section2">
              <h3>$ 45.99</h3>

            </div>
            <div class="section3">
              <p class="normal1">20</p>

            </div>
          </div>
        </div>

        <div class="container2">

          <div class="left-part2">

            <div class="notes2">
              <img src="/img/Abstract.png" />
            </div>
            <div class="notes2-2">
              <h3>Sarphens Illustration</h3>
              <h6>Lorem ipsum dolar sit amet consectetur adiipicing elit</h6>

            </div>
          </div>


          <div class="right-part2">
            <div class="section2-1">
              <p class="normal">32 in Stock</p>
            </div>
            <div class="section2-2">
              <h3>$ 45.99</h3>
            </div>
            <div class="section2-3">
              <p class="normal1">20</p>

            </div>
          </div>
        </div>

      </div>


    </main>
  )
  
  export default StudentsData;
  