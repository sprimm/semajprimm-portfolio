/**
 * Home.jsx
 * Semaj Primm
 * 301409310
 * September 26, 2024
 */
import { Link } from 'react-router-dom'
import vectorProfile from '../assets/vector_portrait.png';

export const Home = () => {
  return (
    <div className="my-24 w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl font-bold">Semaj Primm</h1>
          <p className="mt-12 text-2xl mb-4">A software engineer with 2 year of experience. I love solving problems and developing them into user-centered products while collaborating with awesome teams.</p>
          <Link to="/about" className="w-fit bg-[#3d8ca2] text-white rounded p-2 text-lg font-light">About me</Link>
        </div>
        <div>
          <img className="object-cover w-full h-[350px]" src={vectorProfile} />
        </div>
      </div>

      <div className="mt-24">
        <Link to="/projects" className="block font-bold text-2xl mb-8 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">Checkout my projects</Link>
        <Link to="/services" className="block font-bold text-2xl mb-8 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">View my services</Link>
        <Link to="/contact" className="block font-bold text-2xl mb-8 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">Get in touch</Link>
      </div>
    </div>
  )
}
