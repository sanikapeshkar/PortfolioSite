import React, { useState } from 'react';
import './Stepper.css';

const steps = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

const Stepper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    const sectionId = steps[index].toLowerCase();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="stepper-sidebar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleStepClick(index)}
        >
          <div className="stepper-bullet-icon" />
          <span className="stepper-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
  