import React from 'react';
import './Education.css';

type EducationItem = {
  school: string;
  city: string;
  percentage: string;
  year: string;
};

const educationData: EducationItem[] = [
  {
    school: 'XYZ High School',
    city: 'Mumbai',
    percentage: '88%',
    year: '2016',
  },
  {
    school: 'ABC Junior College',
    city: 'Pune',
    percentage: '82%',
    year: '2018',
  },
  {
    school: 'LMN University',
    city: 'Delhi',
    percentage: '79%',
    year: '2022',
  },
];

const EducationTimeline = () => {
  return (
    <div className="timeline-horizontal-container">
      <h2 className="timeline-title">Education</h2>
      <div className="timeline-horizontal">
        {educationData.map((item, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.school}</h3>
              <p>{item.city}</p>
              <p className="percentage">Score: {item.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
