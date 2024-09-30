/**
 * About.jsx
 * Semaj Primm
 * 301409310
 * September 26, 2024
 */

import profileImg from '../assets/semaj_profile.jpg';
import pdf from '../assets/resume.pdf';

export const About = () => {
  return (
    <div className="my-24 w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col justify-center gap-y-8">
          <h1 className="text-5xl font-bold">About Me</h1>
          <a href={pdf} target="_blank" className="w-fit bg-[#3d8ca2] text-white rounded px-4 py-2 text-lg font-light">View My Resume</a>
        </div>
        <div>
          <img className="object-cover w-full h-[350px]" src={profileImg} />
        </div>
      </div>
      <div className="mt-12 text-lg">
        <p className="mb-4">I’m currently in the Software Engineering Artificial Intelligence program at Centennial College. I hold a 2 year diploma in Software Engineering from Sheridan College. Fun fact, I studied Art & Design for a year at Centennial College, so you’ll see a few on my portfolio pieces on this site. </p>
        <p className="mb-4">I also have work experience: I worked as a Web Developer at CleanAir.AI and helped migrate the existing codebases into one newer one. My job was to redesign the user interface components using Vue.js and TailwindCSS. I used ViTest to conduct comprehensive unit tests. Those components were successfully integrated into the app relaunch.</p>
        <p>I recently completed the 10-week ServiceNow NextGen Professional program to gain the skills to become a System Administrator. I worked in a team of 4 to develop and present a school bus management app for parents on the ServiceNow platform. We engaged with stakeholders and ServiceNow employees by presenting our app for feedback.</p>
      </div>
    </div>
  )
}