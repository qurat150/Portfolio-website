import React from 'react'
import { MenuBar } from './MenuBar'

export const Home = () => {
  return (
    <div className="home-main flex">
      <MenuBar />
      <div>
        <h1 className='headings'><p className='displayInline'>&lt; </p> Hey I'm Anniee <p className='displayInline'> /&gt;</p></h1>
        <h1 className='headings'>I build interactive websites that</h1>
        <h1 className='headings'>run accross platforms & devices</h1>
      </div>
    </div>
  )
}