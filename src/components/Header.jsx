import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export default function Header () {
  return (
    <>
        <nav className="navbar shadow navbar-expand-sm justify-content-center">
            <span className='main-logo'><img src={logo} className='img-fluid logo' title='Sports Info Logo' /></span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/' title='Cricket | Sports Info'>Cricket</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='Kabaddi | Sports Info'>Kabaddi</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='Soccer | Sports Info'>Soccer</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='BasketBall | Sports Info'>BasketBall</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='Field Hockey | Sports Info'>Field Hockey</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='Badminton | Sports Info'>Badminton</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='Racing | Sports Info'>Racing</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='Tennis Sports | Sports Info'>Tennis Sports</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='ESports | Sports Info'>ESports</Link>
                </li>
                <li className="nav-item">
                    <Link to='' title='WWE | Sports Info'>WWE</Link>
                </li>
            </ul>
        </nav>
        <div className='empty'></div>
    </>
  )
}
