import React from "react";
import './SidebarOptions.css'


function SidebarOptions({Icon, title, number, selected}) {
  

  return (
    <div className={`sidebar-option ${selected && "sidebar-option--active"}`} >
      <Icon className="option-icon" />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions