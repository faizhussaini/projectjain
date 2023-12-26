import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>15+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>35K+</div>
        <span  style={{color: darkMode?'white':''}}>Happy </span>
        <span>Customers</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Tie Ups</span>
      </div>
    </div>
  );
};

export default Experience;
