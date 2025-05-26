import React, { useEffect, useRef, useState } from 'react';
import './skills.css';
import { skillsData } from './skillsData';

const Skills = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const currentRefs = cardRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="skills">
      <h1 className="skills-heading">Tools & Technologies</h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => {
          const animateClass =
            index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
          return (
            <div
              key={index}
              className={`skill-card ${
                visibleCards.includes(index) ? animateClass : 'hidden'
              }`}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="skill-icon"
              />
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-des">{skill.des}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
