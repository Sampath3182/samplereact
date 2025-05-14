// App.js
import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";
import Challenge from "./Challenge.jsx";
import Jobs from "./Jobs.jsx";

function App(){
  return (
    <div className="container">
      <Header/>
      <Section
        id="features"
        title="Why This Platform?"
        content={
          <ul>
            <li><i><b>No resumes.</b></i> Skill-based challenges only.</li>
            <li>Match your skills Not Resumes</li>
            <li>Companies post actual work samples.</li>
            <li>Transparent salaries and culture data.</li>
            <li>Post-hire feedback improves future matches.</li>
          </ul>
        }
      />
      <Section
        id="candidates"
        title="For Candidates"
        content={<p>Show your skills, not your history. Complete real challenges and get matched to roles where you can thrive.</p>}
      />
      <div className="card">
        <Challenge />
      </div>
      
     
      <Section
        id="employers"
        title="Companies"
        content={<p>Stop filtering by keywords. Let your job speak through real tasks. Hire based on skill and fit.</p>}
      />
      <div className="card">
        <Jobs/>
      </div>
      <Footer />
    </div>
  );
};

export default App;

