/**
 * Services.jsx
 * Semaj Primm
 * 301409310
 * September 26, 2024
 */
import landscape from '../assets/landscape.png';
import recipeMe from '../assets/recipe-me.png';
import calculator from '../assets/calculator-hero.png';

export const Services = () => {
  return (
    <div className="my-24 w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div>
          <img className="object-cover w-full h-[350px]" src={landscape} />
        </div>
      </div>
      <div className="mt-12">
        <div className="mb-12">
          <p className="font-bold text-2xl mb-4 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">Development</p>
          <p className="font-semibold mb-4">Web Development, Mobile App Development</p>
          <img src={calculator} className="w-[300px]" />
          <p className="text-sm mt-4">I offer services in web development and mobile app development. My tech stack includes: React.js, TailwindCSS, Java, C#, C++, Python, and SQL.</p>
        </div>

        <div className="mb-12">
          <p className="font-bold text-2xl mb-4 underline underline-offset-8 decoration-[#3d8ca2] decoration-4">Design</p>
          <p className="font-semibold mb-4">Graphic Design, 3D Modeling</p>
          <img src={recipeMe} className="w-[300px]" />
          <p className="text-sm mt-4">I offer services in graphic design, brand design, and 3D modeling. My tech stack includes Adobe Illustrator, Blender, and OnShape.</p>
        </div>
      </div>
    </div>
  )
}
