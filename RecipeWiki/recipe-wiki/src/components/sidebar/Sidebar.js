import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-items'></div>
            <span className='sidebar-title'><b>Filter</b></span>
            <div className='meals'>
              <div className='breakfast'>Breakfast</div>
              <div className='brunch'>Brunch</div>
              <div className='lunch'>Lunch</div>
              <div className='dinner'>Dinner</div>
            </div>
    </div>
  )
}
