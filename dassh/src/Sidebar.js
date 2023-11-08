import React from 'react'
import { FaAngleRight, FaAngleDown, FaDatabase, FaProductHunt, FaCar, FaUser, FaIdCard, FaFileInvoice, FaVideo }
    from 'react-icons/fa';
    


//function Sidebar({openSidebarToggle, OpenSidebar})
function Sidebar({ openSidebarToggle, OpenSidebar, toggleNavbar }) {
    
    return (//className={openSidebarToggle ? "sidebar-responsive": ""}
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    {/* <FaCar className='icon_header' /> */}
                     <h3>Student-DASH</h3>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                {/* <button className="toggle-button" onClick={toggleNavbar}>
                    &#9776;
                </button> */}
                
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <FaDatabase className='Sidebar-icons' />
                    <a href="">
                        Student
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <FaProductHunt className='Sidebar-icons' />
                    <li class="dropdown">
                        <a href="">
                            Cources
                        </a>
                        <ul class="dropdown-content">
                            <li><a href="#">Computer science</a></li>
                            <li><a href="#">Mech</a></li>
                            <li><a href="#">Electrical</a></li>
                            <li><a href="#">Civil</a></li>
                        </ul>
                    </li>
                </li>
                <li className='sidebar-list-item'>
                    <FaVideo className='Sidebar-icons' />

                    <li class="dropdown">
                        <a href="">
                            Cources List
                        </a>
                        <ul class="dropdown-content">
                            <li><a href="#">COURCE1</a></li>
                            <li><a href="#">COURCE2</a></li>
                            <li><a href="#">COURCE3</a></li>
                            <li><a href="#">COURCE4</a></li>
                        </ul>
                    </li>
                </li>
                <li className='sidebar-list-item'>
                    <FaUser className='Sidebar-icons' />
                    <a href="">
                        student dashboard
                    </a>
                </li>
                {/* <li className='sidebar-list-item'>
                <FaFileInvoice className='Sidebar-icons' />
                    <a href="">
                        Inventory
                    </a>
                    <FaAngleRight className='Sidebar-icons' />
                </li>
                <li className='sidebar-list-item'>
                <FaIdCard className='Sidebar-icons' />
                    <a href="">
                        Reports
                    </a>
                    <FaAngleRight className='Sidebar-icons' />
                </li> */}

            </ul>

            {/* <div className='brand'>

                <img src="/img/Abs.png" />

                <div className='evan'>
                    <h4>Evano</h4>
                    <h6>Project Manager</h6>
                </div>
                <FaAngleDown className='Sidebar-icons-brand' />
            </div> */}



        </aside>
    )
}

export default Sidebar;



// <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsGrid1X2Fill className='icon'/> Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillArchiveFill className='icon'/> Products
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Categories
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsPeopleFill className='icon'/> Customers
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsListCheck className='icon'/> Inventory
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsMenuButtonWideFill className='icon'/> Reports
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGearFill className='icon'/> Setting
//                 </a>
//             </li>
//         </ul>