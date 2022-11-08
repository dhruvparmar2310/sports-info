import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { TfiCommentAlt } from 'react-icons/tfi'
import { HiEye } from 'react-icons/hi'
import { GrTwitter, GrLinkedinOption, GrInstagram } from 'react-icons/gr'
import { SiFacebook } from 'react-icons/si'

export default function DetailedPage () {
  const sImage = localStorage.getItem('Image')
  const sTitle = localStorage.getItem('Title')
  const sDescription = localStorage.getItem('Description')
  const sFirstName = localStorage.getItem('FirstName')
  const sLastName = localStorage.getItem('LastName')
  const nCommentsCount = localStorage.getItem('CommentsCounts')
  const nViewCounts = localStorage.getItem('Views')

  return (
    <>
      <Header />
      <div>
        <div className='top-img' style={{
          backgroundImage: `url(${sImage})`
        }}>
          <div className='content'>
            <h2 className='header'>{sTitle}</h2>
            <p className="tags">{sFirstName} {sLastName} <small>3 mins ago</small><span className='views'><TfiCommentAlt /> {nCommentsCount} <HiEye/> {nViewCounts}</span></p>
          </div>
          <span className='design' style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgb(13 110 253 / 50%))', position: 'absolute', height: '50%', display: 'flex', width: '100%' }}></span>
        </div>
        <div className='container row main-content'>
          <div className='col-lg-2'>
            <ul className='social'>
              <li><SiFacebook /></li>
              <li><GrTwitter /></li>
              <li><GrLinkedinOption /></li>
              <li><GrInstagram /></li>
            </ul>
          </div>
          <div className='col-lg-8 description'>
            {sDescription}
          </div>
          <div className='col-lg-2 readlist shadow'>
            <p>Readlist</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui et pariatur voluptas? In a voluptates quia, veniam ab suscipit quas iure blanditiis dolore neque sapiente, qui nemo dignissimos voluptas assumenda!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
