import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProjectsData from '../assets/project/projectsData.json';

import Logo from '../assets/logo.svg';
import MenuIcon from '../assets/menuIcon.svg';
import HeroVector from '../assets/heroVector.svg';
import Profile from '../assets/profile.svg';
import Email from '../assets/envelope-open-regular.svg';
import GitHub from '../assets/github.svg';
import Phone from '../assets/phone-solid.svg';
import Linkedin from '../assets/linkedin-in.svg';

export default function area() {
  // console.log("Data" + ProjectsData[1].name);

  return (
    <section className="w-full">
      {/* header */}
      <nav className="w-full h-[75pt] flex justify-between items-center">
        <Image src={Logo} alt="logo-Dumindu-Bandara" width={223} height={76} />
        <button className="bg-clrTitle rounded-full w-[50pt] h-[50pt] fixed z-50 right-10">
          <Image
            src={MenuIcon}
            alt="menu"
            width={40}
            height={40}
            className="mx-auto text-clrSubTitle"
          />
        </button>
      </nav>

      {/* Hero */}
      <section className="w-full flex flex-col md:flex-row justify-between md:items-center px-5 md:px-10 mb-10">
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-6xl text-clrTitle font-light">{`HEY I'M`}</h1>
          <h1 className="text-3xl text-clrTitle font-bold">DUMINDU BANDARA</h1>
          <h4 className="text-clrNormalTitle font-medium text-xl">
            Frontend Developer | UI/UX Designer | Undergraduate
          </h4>
          <button className="text-clrTitle rounded-full border-2 border-clrTitle w-[223px] h-[65px] mt-5 py-2 font-medium mx-auto md:mx-0">
            GET IN TOUCH
          </button>
        </div>
        <div className="w-full h-[50%] md:w-[50%] md:h-full order-1 md:order-2">
          <Image src={HeroVector} alt="HeroVector" width="1000" height="500" />
        </div>
      </section>

      {/* Into */}
      <section className="w-full px-5 py-7 md:py-20 md:px-20 bg-clrTitle">
        <span className="font-normal text-3xl md:text-7xl text-[#ffffff] leading-tight tracking-wide text-justify">
          I use my knowledge of design and development to create online
          experiences that make people feel good and help them connect with
          others.
        </span>
      </section>

      {/* About */}
      <section className="w-full px-5 py-10 md:py-20 md:px-20">
        <h1 className="text-center mb-10 text-6xl text-clrTitle">ABOUT ME</h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <Image src={Profile} alt="Profile" width="1000" height="500" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-10">
            <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
              A brief intro, who am I?
            </h1>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I am an independent frontend developer, UI/UX designer and creator
              based in Colombo Sri Lanka.
            </p>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I specialize in crafting elevated, intuitive, and minimalistic
              designs for startups and small businesses to help them stand out
              in the digital landscape with a powerful impact.
            </p>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              {' '}
              😎When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design on
              LinkedIn
            </p>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="w-full px-5 py-10 md:py-20 md:px-20">
        <h1 className="text-center mb-10 text-6xl text-clrTitle">RESUME</h1>
        <div className="mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
                My Expertise.
              </h1>
              <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
                I focus on all things design and web related. With each of my
                services, my goal is to deliver an impactful and elevating
                digital experience for everyone
              </p>
            </div>
            <div className="flex flex-col  text-4xl md:text-6xl text-clrOPTTitle font-semibold">
              <span className="mb-4 md:mt-16">Web Development</span>
              <span className="mb-4">Web Design</span>
              <span className="mb-4">Wireframing</span>
              <span>UI/UX Design</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div className="order1 md:order-2">
              <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
                My Skills.
              </h1>
              <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
                These are my go to tech stack to make any projects happen. I am
                always eager of learning more about my current stack, and new
                technologies that could expand my horizons.
              </p>
            </div>
            <div className="flex flex-col order-2 md:order-1 text-4xl md:text-6xl text-clrOPTTitle font-semibold">
              <span className="mb-4 md:mt-16">HTML & CSS</span>
              <span className="mb-4">JavaScript</span>
              <span className="mb-4">React JS</span>
              <span className="mb-4">Next JS</span>
              <span className="mb-4">Node JS</span>
              <span className="mb-4">GSAP</span>
              <span className="mb-4">Tailwind CSS</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-full px-5 py-10 md:py-20 md:px-20">
        <h1 className="text-center mb-10 text-6xl text-clrTitle">PROJECTS</h1>

        <section>
          {ProjectsData.map((project) => (
            <div className="w-full mb-10" key={project.id}>
              <div className="w-full h-full">
                <Image
                  src={project.pic}
                  alt={project.id}
                  width={1200}
                  height={500}
                />
              </div>

              <div className="w-full my-6">
                <div className="w-full flex mb-5">
                  <span className="text-lg font-normal border-2 py-2 px-4 text-clrTitle border-clrTitle rounded-full mr-5">
                    {project.year}
                  </span>
                  <span className="text-lg font-normal border-2 py-2 px-4 text-clrTitle border-clrTitle rounded-full">
                    {project.tech}
                  </span>
                </div>
                <div>
                  <h2 className="text-[24px] font-medium ">{project.name}</h2>
                  <h3 className="text-lg font-medium mb-2">{project.type}</h3>
                  <p className="text-md text-clrParagraph leading-6 -tracking-wide">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <button className="text-clrTitle rounded-full border-2 border-clrTitle w-[223px] h-[65px] mt-5 py-2 font-medium mx-auto">
          VIEW MORE
        </button>
      </section>

      {/* contact */}
      <section className="w-full px-5 py-10 md:py-20 md:px-20">
        <h1 className="text-center mb-10 text-6xl text-clrTitle">CONTACT</h1>

        <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-28 gap-10">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
              Have an awesome idea? {`Let's`} bring it to life
            </h1>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I focus on all things design and web related. With each of my
              services, my goal is to deliver an impactful and elevating digital
              experience for everyone
            </p>
            <form className="w-full mb-5 mt-10">
              <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="w-full md:mr-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="outline-none border-b-2 p-3 mb-10 w-full border-clrParagraph placeholder-clrParagraph"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="outline-none border-b-2 p-3 border-clrParagraph mb-10 w-full placeholder-clrParagraph"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    placeholder="Your message"
                    className="outline-none border-b-2  p-3 w-full h-[150px] border-clrParagraph placeholder-clrParagraph"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-clrContentTitle rounded-full border-2 border-clrContentTitle w-[223px] h-[65px] mt-5 py-2 font-medium mx-auto"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="mb-8">
              <h1 className="text-[32px] text-clrTitle font-medium">
                Contact Details
              </h1>
              <ul>
                <li className="flex my-3">
                  <Image src={Email} alt="#" className="mr-3" />
                  <Link href="#">dumindubandara969@gmail.com</Link>
                </li>
                <li className="flex">
                  <Image src={Phone} alt="#" className="mr-3" />
                  <Link href="#">{`+(94) 716816224`}</Link>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h1 className="text-[32px] text-clrTitle font-medium">
                My Digital Spaces
              </h1>
              <ul>
                <li className="flex my-3">
                  <Image src={Linkedin} alt="#" className="mr-3" />
                  <Link href="#">Linkedin</Link>
                </li>
                <li className="flex">
                  <Image src={GitHub} alt="#" className="mr-3" />
                  <Link href="#">GitHub</Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-[32px] text-clrTitle font-medium">
                Location
              </h1>
              <span className="my-3">Malabe, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-between items-center px-5 py-10 md:py-20 md:px-20">
        <h4 className="text-lg">©Code By DUMINDU BANDARA 2023</h4>
        <button
          type="submit"
          className="text-clrTitle rounded-full border-2 border-clrTitle w-[223px] h-[65px] py-2 font-medium"
        >
          BACK TO TOP
        </button>
      </section>
    </section>
  );
}
