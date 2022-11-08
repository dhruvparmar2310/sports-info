import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import JSONData from '../sports-info.json'
import { TfiCommentAlt } from 'react-icons/tfi'
import { HiEye, HiArrowDown } from 'react-icons/hi'
import Footer from './Footer'

function Home () {
  console.log(JSONData.data)
  const [count, setCount] = useState(2)
  // fetch('/src/sports-info.json')
  //   .then((res) => {
  //     console.log('Get Data from Api :>> ', res)
  //   })
  //   .catch((error) => {
  //     console.log('error :>> ', error)
  //   })

  const navigate = useNavigate()
  const handleClick = (e, index, data) => {
    e.preventDefault()
    console.log('index', index)
    localStorage.setItem('Image', data.sImage)
    localStorage.setItem('Title', data.sTitle)
    localStorage.setItem('Description', data.sDescription)
    localStorage.setItem('FirstName', data.iId.sFirstName)
    localStorage.setItem('LastName', data.iId.sLastName)
    localStorage.setItem('CommentsCounts', data.nCommentsCount)
    localStorage.setItem('Views', data.nViewCounts)
    navigate('/detailed-page')
  }

  const handleLoadMoreButton = (e) => {
    setCount(count + count)
  }

  // to visible only provided count on home page for pagination
  const pageContent = JSONData.data.slice(0, count)

  return (
    <>
        <Header />
        <div style={{ height: '10vh' }}></div>
        {pageContent.map((data, index) => {
          return (
            <div className='container inner-content' key={index} style={{ width: '75%' }} title={data.sTitle} onClick={(e) => handleClick(e, index, data)}>
              {/* {console.log('index :>> ', index)} */}
                <div className="card mb-3 shadow">
                    <div className="row g-0">
                        <div className="col-md-4 image-content">
                          <img src={data.sImage} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title">{data.sTitle}</h5>
                              <p className="card-text">{data.sDescription}</p>
                              <p className="uploaded-time">{data.iId.sFirstName} {data.iId.sLastName} <small className="text-muted">3 mins ago</small><span className='comments'><TfiCommentAlt /> {data.nCommentsCount} <HiEye/> {data.nViewCounts}</span></p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          )
        })}
        <button className='load mb-3' title='Load More Pages' onClick={(e) => handleLoadMoreButton(e)}>Load More <span><HiArrowDown /></span></button>
      <Footer />
    </>
  )
}

export default Home
