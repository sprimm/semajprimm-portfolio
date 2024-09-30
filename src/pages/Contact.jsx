/**
 * Contact.jsx
 * Semaj Primm
 * 301409310
 * September 26, 2024
 */

import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/semaj_profile.jpg';

export const Contact = () => {

  const navigate = useNavigate()

  // Navigates user to homepage on form submit
  function handleSubmit(e){
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className="my-24 w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col justify-center gap-y-4">
          <h1 className="text-5xl font-bold">Contact</h1>
          <p>Get in touch or send me an email directly at <a className="font-bold" href="mailto:semajthomasprimm@gmail.com">here</a></p>
        </div>
        <div>
          <img className="object-cover w-full h-[350px]" src={profileImg} />
        </div>
      </div>
      <div className="mt-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
          <input id="firstName" type="text" placeholder="First Name" className="border rounded p-2" />
          <input id="lastName" type="text" placeholder="Last Name" className="border rounded p-2" />
          <input type="tel" placeholder="Contact Number" className="border rounded p-2" />
          <input type="email" placeholder="Email" className="border rounded p-2" />
          <textarea rows="5" placeholder="Message" className="border rounded p-2 resize-none"></textarea>
          <input type="submit" value="Send Message" className="w-fit bg-[#3d8ca2] text-white rounded p-2 text-lg" />
        </form>
      </div>
    </div>
  )
}