// CourseCard.js
import React, { useState } from 'react';
import './coursecard.css';

const CourseCard = ({ course }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };
  if (!course) {
    return <div className="course-card"></div>;
  }

  return (
    <div className="course-card-1">
      <img src={course.thumbnail} alt={course.name} />
      <div className="course-details">
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Due Date: {course.dueDate}</p>
        <div className="progress">
          <div
            className={`progress-bar ${completed ? 'completed' : ''}`}
            style={{ width: completed ? '100%' : '50%' }}
          />
        </div>
        <button onClick={toggleCompletion}>
          {completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
