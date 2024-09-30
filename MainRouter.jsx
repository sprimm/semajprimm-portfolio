import React from 'react'
import { Layout } from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import { Home } from './src/pages/Home'
import { About } from './src/pages/About'
import { Projects } from './src/pages/Projects'
import { Contact } from './src/pages/Contact'
import { Services } from './src/pages/Services'

const MainRouter = () => {
  return (
    <div>
        <Layout />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/services" element={<Services />}/>
            <Route exact path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default MainRouter