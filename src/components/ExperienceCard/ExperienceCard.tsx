import React from 'react';
import './ExperienceCard.css';
import type { ExperienceCardProps } from './ExperienceCard.types';


const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  location,
  duration,
  skills,
  points,
}) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <h2>{position}</h2>
        <h3>{company}</h3>
        <p className="meta">{location} | {duration}</p>
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
      <ul className="points-list">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
