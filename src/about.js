import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3' ><div className="card">
    <div className="card-header" style={props.styleForAbout}>
      Featured
    </div>
    <div className="card-body" style={props.styleForAbout}>
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

    </div>
  </div></div>
  )
}
