/**
 * Projects.jsx
 * Semaj Primm
 * 301409310
 * September 26, 2024
 */

import landscape from '../assets/landscape.png';
import calculator from '../assets/calculator-hero.png';
import usbInterior from '../assets/usb-interior.png';
import minimalist from '../assets/minimalist-homepage.png';

export const Projects = () => {
  return (
    <div className="my-24 w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col justify-center gap-y-4">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p>Here are a few projects of mine.</p>
        </div>
        <div>
          <img className="object-cover w-full h-[350px]" src={landscape} />
        </div>
      </div>
      <div className="mt-12">
        <div className="mb-12">
          <p className="font-bold text-2xl mb-4 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">Calculator App</p>
          <div className="grid grid-cols-2 gap-x-4">
            <img className="w-full h-[250px] object-cover" src={calculator} />
            <div>
              <p className="font-semibold mb-4">Development | React, TailwindCSS, Netlify</p>
              <p className="text-sm">
                <span className="block mb-2">I undertook the challenge of developing a fully functional calculator with a 3-way theme toggle. Using React for dynamic UI updates and TailwindCSS for styling, I developed an intuitive and visually appealing user interface.</span>
                <span>I leveraged Netlify for seamless deployment. To ensure accessibility to users across different screen sizes, I developed this app with mobile first approach.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="font-bold text-2xl mb-4 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">3D USB Drive</p>
          <div className="grid grid-cols-2 gap-x-4">
            <img className="w-full h-[250px] object-cover" src={usbInterior} />
            <div>
              <p className="font-semibold mb-4">Design | OnShape</p>
              <p className="text-sm">
                <span className="">I enjoy playing the guitar and wanted to design a USB drive after one. It’s modelled using OnShape and after a Les Paul guitar and features knobs, a fret, pickups and a bridge. </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="font-bold text-2xl mb-4 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">Minimalist Portfolio </p>
          <div className="grid grid-cols-2 gap-x-4">
            <img className="w-full h-[250px] object-cover" src={minimalist} />
            <div>
              <p className="font-semibold mb-4">Development | Next.js, TailwindCSS, Sanity.io, Vercel</p>
              <p className="text-sm">
                <span className="block mb-2">A multi-page, responsive portfolio site that I developed which displays dynamic data from Sanity.io CMS. It's currently being hosted using Vercel.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
