import React, { useState } from 'react';

const CourseDetails = () => {
  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);


  // Sample course data
 var sampleCourse = 
  {
    name: 'Sample Course',
    instructor: 'John Doe',
    description: 'This is a sample course description.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 9:00 AM - 11:00 AM',
    location: 'Online',
    prerequisites: 'None',
    syllabus: 'Syllabus content goes here...',
  };
  var sampleCourseone = 
  {
    name: 'Sample Course',
    instructor: 'Doe',
    description: 'course description.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 9:00 AM - 11:00 AM',
    location: 'Online',
    prerequisites: 'None',
    syllabus: 'Syllabus content goes here...',
  };

  var sampleCoursetwo = 
  {
    name: 'Sample Course',
    instructor: 'Tom',
    description: 'course description.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 9:00 AM - 11:00 AM',
    location: 'Online',
    prerequisites: 'None',
    syllabus: 'Syllabus content goes here...',
  };

  var sampleCoursethree = 
  {
    name: 'Sample Course',
    instructor: 'Sam',
    description: 'course description.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 9:00 AM - 11:00 AM',
    location: 'Online',
    prerequisites: 'None',
    syllabus: 'Syllabus content goes here...',
  };
 
  

 

  
  
  return (
    <div className='cour-Detail'>
      <h1>{sampleCourse.name}</h1>
      <div className='course-A'>
      <p>Instructor: {sampleCourse.instructor}</p>
      <p>Description: {sampleCourse.description}</p>
      <p>Enrollment Status: {sampleCourse.enrollmentStatus}</p>
      <p>Duration: {sampleCourse.duration}</p>
      <p>Schedule: {sampleCourse.schedule}</p>
      <p>Location: {sampleCourse.location}</p>
      <p>Prerequisites: {sampleCourse.prerequisites}</p>

      <button  classname='sylab' onClick={() => setSyllabusExpanded(!isSyllabusExpanded)}>
        {isSyllabusExpanded ? 'Hide Syllabus' : 'Show Syllabus'}
      </button>
      </div>


      <div className='course-A'>
      <p>Instructor: {sampleCourseone.instructor}</p>
      <p>Description: {sampleCourseone.description}</p>
      <p>Enrollment Status: {sampleCourseone.enrollmentStatus}</p>
      <p>Duration: {sampleCourseone.duration}</p>
      <p>Schedule: {sampleCourseone.schedule}</p>
      <p>Location: {sampleCourseone.location}</p>
      <p>Prerequisites: {sampleCourseone.prerequisites}</p>

      <button  classname='sylab' onClick={() => setSyllabusExpanded(!isSyllabusExpanded)}>
        {isSyllabusExpanded ? 'Hide Syllabus' : 'Show Syllabus'}
      </button>
      </div>
      <div className='course-A'>
      <p>Instructor: {sampleCoursetwo.instructor}</p>
      <p>Description: {sampleCoursetwo.description}</p>
      <p>Enrollment Status: {sampleCoursetwo.enrollmentStatus}</p>
      <p>Duration: {sampleCoursetwo.duration}</p>
      <p>Schedule: {sampleCoursetwo.schedule}</p>
      <p>Location: {sampleCoursetwo.location}</p>
      <p>Prerequisites: {sampleCoursetwo.prerequisites}</p>

      <button  classname='sylab' onClick={() => setSyllabusExpanded(!isSyllabusExpanded)}>
        {isSyllabusExpanded ? 'Hide Syllabus' : 'Show Syllabus'}
      </button>
      </div>
      
      <div className='course-A'>
      <p>Instructor: {sampleCoursethree.instructor}</p>
      <p>Description: {sampleCoursethree.description}</p>
      <p>Enrollment Status: {sampleCoursethree.enrollmentStatus}</p>
      <p>Duration: {sampleCoursethree.duration}</p>
      <p>Schedule: {sampleCoursethree.schedule}</p>
      <p>Location: {sampleCoursethree.location}</p>
      <p>Prerequisites: {sampleCoursethree.prerequisites}</p>

      <button  classname='sylab' onClick={() => setSyllabusExpanded(!isSyllabusExpanded)}>
        {isSyllabusExpanded ? 'Hide Syllabus' : 'Show Syllabus'}
      </button>
      </div>
      


      

      {isSyllabusExpanded && (
        <div>
          <h2>Syllabus</h2>
          <p>{sampleCourse.syllabus}</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;




// // CourseDetails.js
// import React from 'react';

// function CourseDetails({ course }) {
    
//     const sampleCourse = {
//         name: 'Sample Course',
//         // Other course properties
//       };
//       const toggleCourseDetails = () => {
//         if (sampleCourse) {
//           setShowCourseDetails(!showCourseDetails);
//         }
//       };

//       {sampleCourse && (
//         <div className="course-details">
//           <h1>{sampleCourse.name}</h1>
//           {/* Other course properties */}
//         </div>
//       )}
      
//   return (
//     <div className="course-details">
//       <h2>{course.name}</h2>
//       <p>Instructor: {course.instructor}</p>
//       <p>Description: {course.description}</p>
//       <p>Enrollment Status: {course.enrollmentStatus}</p>
//       <p>Course Duration: {course.duration}</p>
//       <p>Schedule: {course.schedule}</p>
//       <p>Location: {course.location}</p>
//       <p>Pre-requisites: {course.prerequisites.join(', ')}</p>
//       <details>
//         <summary>Syllabus</summary>
//         <ul>
//           {course.syllabus.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </details>
//     </div>





//   );
// };

// export default CourseDetails;
