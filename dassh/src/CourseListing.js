// CourseListing.js
import React from 'react';
import { Link } from 'react-router-dom';


 

function CourseListing () 
{
    const courses = [{
        name: 'Course 1',
        instructor: 'Instructor A',
        description: 'This is Course 1 description.',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'MWF 9:00 AM - 11:00 AM',
        location: 'Room 101',
        prerequisites: ['Prerequisite 1', 'Prerequisite 2'],
        syllabus: ['Week 1: Introduction', 'Week 2: Topic 2', 'Week 3: Topic 3'],
      },
      {
        name: 'Course 2',
        instructor: 'Instructor B',
        description: 'Course 2 description goes here.',
        enrollmentStatus: 'Closed',
        duration: '10 weeks',
        schedule: 'TTH 1:00 PM - 3:00 PM',
        location: 'Room 202',
        prerequisites: ['Prerequisite 3', 'Prerequisite 4'],
        syllabus: ['Week 1: Kickoff', 'Week 2: Topic 5', 'Week 3: Topic 6'],
      },
      ];
  return (
    <div className="course-listing">
      <h1>Course Listing</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <Link to={`/courses/${index}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;
