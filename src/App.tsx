import * as React from 'react';
import CusCard from './components/CusCard';
import Badge from './components/Badge';
import PrimaryButton from './components/PrimaryButton';
import { scrollToSection } from './utils/helpers';
import './App.css';
import { Phone, Mail, GraduationCap, FileCode, MapPin } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import Autoplay from 'embla-carousel-autoplay';
// import { useEffect, useRef } from 'react';

import Navbar from './components/navbar';
import ContactForm from './components/ContactForm';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const handleDownload = () => {
    // Construct the relative URL to the PDF file
    const pdfUrl = '/Mingyang_Wang_Resume.pdf'; // Assuming the file is in the public folder

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', '/Mingyang_Wang_Resume.pdf');

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Clean up: remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="">
        <div className="fixed z-[1] top-0 left-0 w-full">
          <Navbar></Navbar>
        </div>
      </section>
      <section className=" mt-[50px] sm:mt-[100px] md:flex md:justify-evenly">
        <div className="md:w-full md:m-0 w-2/3 max-w-[400px] min-w-[200px] m-auto">
          <img className="rounded-full" src="Designer (5).jpg" alt="" />
        </div>

        <div className="md:mt-[80px] mt-[40px]">
          <span className="text-lg text-slate-500">Hello, I'm</span>
          <h1 className="text-slate-200 text-2xl mt-2">Adrian Wang</h1>
          <h2 className=" text-xl mt-2 text-slate-400">Frontend Developer</h2>
          <PrimaryButton onClickFuntion={handleDownload} title="Download CV" />
          <PrimaryButton
            onClickFuntion={(e: React.MouseEvent) =>
              scrollToSection('contactMe', e)
            }
            title={'Contact Info'}
          />
        </div>
      </section>

      <section className="mt-[50px] sm:mt-[80px] " id="about">
        <h1 className="text-slate-200 text-3xl mb-10 ">ABOUT ME</h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center ">
          <div className=" lg:row-span-2 align-self-center md:w-full md:m-0 w-2/3 min-w-[300px] max-w-[380px] ">
            <img className="rounded-3xl" src="Designer (2).png" alt="" />
          </div>
          <div className="  lg:col-span-2 flex flex-wrap  justify-around items-center text-slate-400 w-full p-4 gap-2">
            <div className="flex flex-col justify-center items-center  w-full sm:w-[285px] h-40 border border-white-600 rounded-2xl ">
              <GraduationCap className=" w-10 h-10 text-slate-200" />
              <span className="text-xl text-slate-200">Education</span>
              <span className="">Bachelors Degree of Computer Science</span>
            </div>
            <div className="flex flex-col justify-center items-center  w-full sm:w-[285px] h-40 border border-white-600 rounded-2xl ">
              <FileCode className="w-10 h-10 text-slate-200" />
              <span className="text-xl text-slate-200">Experience</span>
              <span className="">1 year Frontend Development</span>
            </div>
          </div>
          <p className=" md:col-span-2  text-slate-400 text-start p-3">
            Passionate and ambitious computer science graduate with a strong
            foundation in programming languages. Seeking a full-time web
            developer position to apply my skills in web application
            development. I am highly motivated to contribute to the creation of
            innovative solutions and make a positive impact.
          </p>
        </div>
      </section>

      <section className="mt-[50px] sm:mt-[80px]" id="skills">
        <h1 className="text-slate-200 text-3xl mb-10"> SKILLS</h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 place-content-around justify-items-center max-w-[800px] m-auto h-72 border border-white-600 rounded-2xl ">
          <Badge skillName="HTML" />
          <Badge skillName="CSS" />
          <Badge skillName="JavaScript" />
          <Badge skillName="React" />
          <Badge skillName="Bootstrap" />
          <Badge skillName="Tailwind" />
          <Badge skillName="Java" />
          <Badge skillName="PHP" />
          <Badge skillName="Git" />
        </div>
      </section>
      <section className="mt-[50px] sm:mt-[80px]" id="projects">
        <h1 className="text-slate-200 text-3xl mb-10"> PROJECTS</h1>

        {isSmallScreen ? (
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="">
              <CarouselItem className="sm:basis-1/2 ">
                <CusCard
                  imageUrl={'hqp.jpg'}
                  projectName={'High Quality Promo'}
                  href={'https://www.hqpstaging.com.au/'}
                />
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 ">
                <CusCard
                  imageUrl={'pb.jpg'}
                  projectName="Promo Brands"
                  href={'https://www.promobrands.com.au/'}
                />
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 ">
                <CusCard
                  imageUrl={'dex.jpg'}
                  projectName={'Dex Collection'}
                  href={'https://www.dexcollection.com.au/'}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-1.5rem] bg-slate-300" />
            <CarouselNext className="right-[-1.5rem] bg-slate-300" />
          </Carousel>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
            <CusCard
              imageUrl={'hqp.jpg'}
              projectName={'High Quality Promo'}
              href={'https://www.hqpstaging.com.au/'}
            />
            <CusCard
              imageUrl={'pb.jpg'}
              projectName="Promo Brands"
              href={'https://www.promobrands.com.au/'}
            />
            <CusCard
              imageUrl={'dex.jpg'}
              projectName={'Dex Collection'}
              href={'https://www.dexcollection.com.au/'}
            />
          </div>
        )}
      </section>

      <section id="contactMe" className="mt-[50px] sm:mt-[80px]">
        <h1 className="text-slate-200 text-3xl mb-10">HIRE ME</h1>
        <div className="flex flex-wrap sm:flex-nowrap  gap-3">
          <ContactForm />
          <div className="pt-5 sm:pt-10 w-full text-gray-400 rounded-lg flex flex-col gap-5 sm:gap-10 ">
            <h1 className=" ">COTACT DETAILS</h1>
            <div className="flex gap-2 justify-center">
              <a href="mailto:adrianwang911@gmail.com">
                <Mail />
              </a>
              <a href="mailto:adrianwang911@gmail.com">
                <h1 className=" ">adrianwang911@gmail.com</h1>
              </a>
            </div>
            <div className="flex gap-2 justify-center">
              <a href="tel:+61 404988826">
                <Phone />
              </a>
              <a href="tel:+61 404988826">
                <h1 className=" ">+61 404988826</h1>
              </a>
            </div>
            <div className="flex gap-2 justify-center">
              <MapPin />
              <h1 className=" ">Location: Melbourne Based</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
