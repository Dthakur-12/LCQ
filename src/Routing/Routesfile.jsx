import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import How from '../Screens/How'
import What from '../Screens/What'
import Who from '../Screens/Who'
import Why from '../Screens/Why'
import AceWorkshop from '../Components/AceWorkshop/AceWorkshop'
import InclusiveLeadership from '../Components/AceWorkshop/InclusiveLeadership'
import FindoutMore from '../Components/FindOutMore/FindoutMore'
import ThoughtFindMore from '../Components/Thoughtfindmore/ThoughtFindMore'
import Consulting from '../Components/Consulting/Consulting'
import Experts from '../Components/Experts/Experts'
import ContactUs from '../Components/ContactUs/ContactUs'

const Routesfile = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/how' element={<How/>} />
      <Route path='/what' element={<What/>} />
      <Route path='/who' element={<Who/>} />
      <Route path='/why' element={<Why/>} />
      <Route path='/aceworkshop' element={<AceWorkshop/>} />
      <Route path='/leadership' element={<InclusiveLeadership/>} />
      <Route path='/findoutMore' element={<FindoutMore/>} />
      <Route path='/thoughfind' element={<ThoughtFindMore/>} />
      <Route path='/consulting' element={<Consulting/>} />
      <Route path='/expert' element={<Experts/>} />
      <Route path='/contact' element={<ContactUs/>} />
    </Routes>
  )
}

export default Routesfile