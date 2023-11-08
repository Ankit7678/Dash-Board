// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BarChart, Bar, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart } from 'recharts';


function Dia() {
  const data = [
    {
      name: 'JAN',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUN',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'AUG',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'SEP',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'OCT',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'NOV',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'DEC',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  return (
    <div className='barpie'>
      <div className='main-car'>
        <div className='card-A'>
          <header className='header1'>
            <div className='header-left'>
              <h2>Overview</h2>
              <h6>Monthly Earning</h6>
            </div>
            <div className='header-right'>
              <button onclick="myFunction()" class="dropbtn">Quality<i class="arrow down"></i></button>
            </div>
          </header>

          <div className='charts1'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="" /> */}
                <XAxis dataKey="name" />
                <Bar dataKey="pv" fill="#f7ace4" width="100px" height="100px" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>



        <div className='main-cards'>
          <div className='card-pie'>
            <div className='main-cards31'>
              <header className='header1'>
                <div className='header-left'>
                  <h2>Customer</h2>
                  <h6>Customer that buy Products</h6>
                </div>
              </header>
            </div>

            <div className='PIE1'>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={800} height={400}>
                  <Pie
                    data={data1}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dia;
<div class="sales-boxes">
        <div class="top-sales box ">
          <div className='z'>
            <header className='header-Product-C'>
              <div className='header-left-Product'>
                <a href="#">
                  <img src="images/sunglasses.jpg" alt="" />
                  <span class="product">Vuitton Sunglasses</span>
                </a>
              </div>
            </header>
            <header className='header-Product-card'>
              <div className='header-left-Product'>
                <h6>32 in Stock</h6>
                <h6>$ 45.99</h6>
                <h6>20</h6>
              </div>
            </header>
          </div>
        </div>

        <div class="top-sales box ">
          <div className='z'>
            <header className='header-Product-C'>
              <div className='header-left-Product'>
                <a href="#">
                  <img src="images/sunglasses.jpg" alt="" />
                  <span class="product">Vuitton Sunglasses</span>
                </a>
              </div>
            </header>
            <header className='header-Product-card'>
              <div className='header-left-Product'>
                <h6>32 in Stock</h6>
                <h6>$ 45.99</h6>
                <h6>20</h6>
              </div>
            </header>
          </div>
        </div>
      </div>



