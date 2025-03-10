import React from "react";
import "./TimelineIntro.css";

function TimelineIntro() {
  return (
    <section className="timeline-intro">
      <div className="intro-container">
        <div className="left-col">
          <h2 className="timeline-title">TIMELINE</h2>
        </div>
        <div className="right-col">
          <p className="timeline-desc">
            The history of photography began with the discovery of two critical
            principles: The first is camera obscura image projection; the second
            is the discovery that some substances are visibly altered by
            exposure to light.
          </p>
        </div>
      </div>
      <div className="timeline-row"></div>
    </section>
  );
}

export default TimelineIntro;
