import React from 'react'


export default function Buttons(props) {
    
  return (
    <div className='ml-3'>
        <span className='mr-3'><button type="button" className={`btn btn-${props.color} my-3`} onClick={props.toggleUpper}>Uppercase</button></span>
        <span className='mr-3'><button type="button" className={`btn btn-${props.color} my-3`} onClick={props.toggleLower}>Lowercase</button></span>
        <span className='mr-3'><button type="button" className={`btn btn-${props.color} my-3`}onClick={props.toggleCopy}>Copy text</button></span>

    </div>
  )
}
