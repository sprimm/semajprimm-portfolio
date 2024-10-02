/**
 * Layout.jsx
 * Semaj Primm
 * 301409310
 * September 26, 2024
 */
import { Link } from 'react-router-dom'

import logo from '../src/assets/logo.png';

export const Layout = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[800px] mx-auto mt-12">
      <Link to="/" className="font-bold text-xl">
        <img src={logo} className="w-[50px]" />
      </Link>
      <nav className="flex gap-x-2 font-bold">
          <Link className="hover:underline decoration-[#3d8ca2] decoration-4" to="/">home</Link>
          <Link className="hover:underline decoration-[#3d8ca2] decoration-4" to="/about">about</Link>
          <Link className="hover:underline decoration-[#3d8ca2] decoration-4" to="/projects">projects</Link>
          <Link className="hover:underline decoration-[#3d8ca2] decoration-4" to="/services">services</Link>
          <Link className="hover:underline decoration-[#3d8ca2] decoration-4" to="/contact">contact</Link>
      </nav>
    </div>
  )
}
