import React, { Fragment } from "react";
import './Section.css'

function Section({Icon, title, selected, color}) {
  return <Fragment>
    <div className= {`emailTab-section  ${selected && "emailTab-section--active" } `}
        style={{
            borderBottom : `3px solid ${color}`,
            color : `${selected && color}`
        }}
    >
        <Icon className="section-icon"/>
        <h3>{title}</h3>
    </div>
  </Fragment>
}

export default Section;