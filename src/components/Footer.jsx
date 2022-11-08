import React from 'react'
import { GrFacebook, GrTwitter, GrLinkedinOption, GrInstagram } from 'react-icons/gr'

export default function Footer () {
  return (
    <>
      <footer className="text-center text-lg-start text-white">
            <div className="container p-4">
                <div className="row mt-4">
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Advertise With Us</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='row mt-4'>
                    <ul>
                        <li><GrFacebook /></li>
                        <li><GrTwitter /></li>
                        <li><GrLinkedinOption /></li>
                        <li><GrInstagram /></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}
