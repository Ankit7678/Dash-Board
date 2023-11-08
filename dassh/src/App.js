import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import CourseCard from './CourseCard';
import Sidebar from './Sidebar';
import StudentDashboard from './StudentDashboard';
import CourseListing from './CourseListing';
import CourseDetails from './CourseDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import Login from './Login';
// import StudentList from './StudentList';
// import {AddStudent,EditStudent} from './AddStudent'
// import NotFound from './NotFound';
// import MyDetails from './MyDetails';
// import { povider, Provider } from "react-redux";
// import store from "./store";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }



  const [isHidden, setIsHidden] = useState(false);

  const toggleNavbar = () => {
    setIsHidden(!isHidden);
  };
  

  const [showCourseDetails, setShowCourseDetails] = useState(false);

  const toggleCourseDetails = () => {
    setShowCourseDetails(!showCourseDetails);}

    
  // Inside your CourseListing component
  // const navigateToCourseDetails = (courseId) => {
  //   // Use the Link component from React Router to navigate
  //   return <Link to={`/courses/${courseId}`} />;
  // };
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);
  const toggleSyllabusExpansion = () => {
    setIsSyllabusExpanded(!isSyllabusExpanded);
  };
 
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleNavbar={toggleNavbar} />
      {/* <StudentDashboard /> */}
      {/* <CourseListing toggleSyllabusExpansion={toggleSyllabusExpansion}/>  */}
      {/* < CoursesData/> */}
      < Home />
       <CourseCard />
       <StudentDashboard/> <br></br>
       <CourseDetails toggleSyllabusExpansion={toggleSyllabusExpansion} />
     {/* <Login/>
<StudentList />
<AddStudent />
<NotFound/>
<MyDetails/>
<store/> */}
    
    
    
    
    
    </div>

  );
}

export default App;
