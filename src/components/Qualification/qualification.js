import React, { useState } from 'react';
import { educationData } from './educationData';
import { certificationData } from './certificationData';
import { experienceData } from './experienceData';
import './qualification.css';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderEducation = () => (
    educationData.map((item, index) => (
      <div className="qualification-data" key={index}>
        <div>
          <h3 className="qualification-title">{item.title}</h3>
          <span className="qualification-subtitle">{item.school}</span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt"></i> {item.date}
          </div>
        </div>
        <div>
          <span className="qualification-rounder"></span>
          {index < educationData.length - 1 && <span className="qualification-line"></span>}
        </div>
      </div>
    ))
  );

  const renderExperience = () => (
    experienceData.map((item, index) => (
      <div className="qualification-data" key={index}>
        <div>
          <h3 className="qualification-title">{item.title}</h3>
          <span className="qualification-subtitle">{item.company}</span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt"></i> {item.date}
          </div>
        </div>
        <div>
          <span className="qualification-rounder"></span>
          {index < experienceData.length - 1 && <span className="qualification-line"></span>}
        </div>
      </div>
    ))
  );

  const renderCertifications = () => (
    certificationData.map((item, index) => (
      <div className="qualification-data" key={index}>
        <div>
          <h3 className="qualification-title">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {item.title}
            </a>
          </h3>
          <span className="qualification-subtitle">{item.platform || item.school}</span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt"></i> {item.date}
          </div>
        </div>
        <div>
          <span className="qualification-rounder"></span>
          {index < certificationData.length - 1 && <span className="qualification-line"></span>}
        </div>
      </div>
    ))
  );

  return (
    <section className="qualification section" id="about">
      <div className="qualification-header">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personal journey</span>
      </div>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={`qualification-button ${activeTab === 'education' ? 'qualification-active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>
          <div
            className={`qualification-button ${activeTab === 'experience' ? 'qualification-active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Experience
          </div>
          <div
            className={`qualification-button ${activeTab === 'certifications' ? 'qualification-active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <i className="uil uil-award qualification-icon"></i>
            Certifications
          </div>
        </div>

        <div className="qualification-sections">
          <div className="qualification-content" data-content>
            {activeTab === 'education' && renderEducation()}
            {activeTab === 'experience' && renderExperience()}
            {activeTab === 'certifications' && renderCertifications()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
