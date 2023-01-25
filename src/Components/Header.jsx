import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [fix, setfix] = useState(false)
    function setFixed() {
        if (window.scrollY >= 90) {
            setfix(true)
        } else {
            setfix(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', setFixed)
        return () => window.addEventListener('scroll', setFixed)
    }, [])


    return (
        <div className={fix ? 'fixed setfixed container-fluid' : 'container-fluid headermain'}>
            <div className='container'>
                <div className='asd'>
                    <div>
                        <Link to='/'>  <img src={logo} alt="logo" style={{ width: '270px' }} /></Link>
                    </div>
                    <nav>
                        <div className='navitem'>
                            <ul>
                                <li><NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/'>Home</NavLink></li>
                                <li> <NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/why'>Why</NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/how'>How</NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/what'>What</NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'active-class' : 'notactive-class')} to='/who'>Who</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Header
