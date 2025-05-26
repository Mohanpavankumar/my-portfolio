import React, { useEffect, useRef, useState } from 'react';
import './works.css';
import { worksData } from './worksData';

const Works = () => {
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
    <section id='works'>
      <h1 className='works-heading'>My Portfolio</h1>
      <div className='works-container'>
        {worksData.map((work, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`work-card ${
              visibleCards.includes(index)
                ? index % 2 === 0
                  ? 'animate-left'
                  : 'animate-right'
                : 'hidden'
            }`}
          >
            <img src={work.image} alt={work.title} className='work-image' />
            <h3 className='work-title'>{work.title}</h3>
            <p className='work-des'>{work.des}</p>
            {work.demolink && (
              <a
                href={work.demolink}
                target='_blank'
                rel='noopener noreferrer'
                className='demo-button'
              >
                View Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
