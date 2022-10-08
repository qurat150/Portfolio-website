import React from 'react'
import image from "../image/web-dev.png"
import facebook from "../image/facebook.png"
import gmail from "../image/gmail.png"
import github from "../image/github.png"
import instagram from "../image/instagram.png"
import twitter from "../image/twitter.png"

const About = () => {
  return (
    <div className="about-main flex">
      <section className='about-section-left '>
        <h2 className='headings about-tags'>
          <p className='displayInline'> &lt;</p>about<p className='displayInline'> &gt;</p>
        </h2>
        <p className='aboutMe'>I'm a front-end web developer with over a decade of experience. I work with agencies across the globe to create high performance & rich interactive websites that work across all platforms & devices.</p>
        <p className='aboutMe smallText'>Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, SVG & JavaScript.</p>
        <p className='aboutMe smallText'>With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance</p>

        <p className='aboutMe green smallText'>In a quest for always keeping myself updated, I read books and attend conferences & meetups.</p>

        <div className="menu">
          <div className='borders flex'>Curriculum Vitae ( PDF )</div>
        </div>
        <h2 className='headings about-tags'>
          <p className='displayInline'> &lt; </p>about<p className='displayInline'> /&gt;</p>
        </h2>
      </section>

      <section className='about-section-right'>
        <div className='position'>
          <img className='myImage' src={image} alt="myImage" />
          <a href="" target="_blank"><img className='aboutMyCloudPlatforms fb' src={facebook} alt="facebook" /></a>
          <a href=""><img className='aboutMyCloudPlatforms twitter' src={twitter} alt="twitter" /></a>
          <a href=""><img className='aboutMyCloudPlatforms github' src={github} alt="github" /></a>
          <a href=""><img className='aboutMyCloudPlatforms instagram' src={instagram} alt="instagram" /></a>
          <a href=""><img className='aboutMyCloudPlatforms gmail' src={gmail} alt="gmail" /></a>
        </div>
      </section>
    </div>
  )
}


// 2d9687
export default About