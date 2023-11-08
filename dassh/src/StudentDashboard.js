// StudentDashboard.js
import React from 'react';
import CourseCard from './CourseCard';

const StudentDashboard = () => {
  const enrolledCourses = [
    {
      name: 'Course 1',
      instructor: 'Instructor 1',
      thumbnail: '../img/Note.png',
      dueDate: 'December 15, 2023',
    },
    {
      name: 'Course 2',
      instructor: 'Instructor 2',
      thumbnail: '../img/Note.png',
      dueDate: 'January 10, 2024',
    },
    {
      name: 'Course 3',
      instructor: 'Instructor 2',
      thumbnail: '../img/Note.png',
      dueDate: 'January 10, 2024',
    },
    {
      name: 'Course 4',
      instructor: 'Instructor 2',
      thumbnail: '../img/Note.png',
      dueDate: 'January 10, 2024',
    },
    // Add more enrolled courses
  ];

  return (
    <div className='ad'>
      <div className='sti-course'>
        <h1>My Enrolled Courses</h1>
        <div className='one'>
        <div class="dropdown">
          <button class="dropbtn">search cources</button>
          <div class="dropdown-content">

            <ul id="optionsList">
              <li><a href="#">Web Devloper</a></li>
              <li><a href="#">UI/UX</a></li>
              <li><a href="#">Front-end</a></li>
              <li><a href="#">Sketch</a></li>
              <li><a href="#">Back-end</a></li>
              <li><a href="#">SQL</a></li>
              <li><a href="#">Arcitect</a></li>
              <li><a href="#">others</a></li>
          
            </ul>
          </div>
        </div>
        </div>
        
      </div>

      <div className="student-dashboard">
        {enrolledCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>

  );
};

export default StudentDashboard;
