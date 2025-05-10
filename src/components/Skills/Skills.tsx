import React from 'react';
import './Skills.css';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Next.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'GitHub Actions', 'AWS'],
  },
  {
    title: 'Tools',
    skills: ['Figma', 'VS Code', 'Jest', 'ESLint'],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skill-badges">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
