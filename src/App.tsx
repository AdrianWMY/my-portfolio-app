import CusCard from './components/CusCard';
import Badge from './components/Badge';
import PrimaryButton from './components/PrimaryButton';
import { scrollToSection } from './utils/helpers';
import './App.css';
import { Phone, Mail, GraduationCap, FileCode, MapPin } from 'lucide-react';

import Navbar from './components/navbar';
import ContactForm from './components/ContactForm';

function App() {
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
      <Navbar></Navbar>
      <section className="mt-[100px] md:flex md:justify-evenly">
        <div className="md:w-full md:m-0 w-2/3 max-w-[400px] min-w-[200px] m-auto">
          <img className="rounded-full" src="public/testing.png" alt="" />
        </div>

        <div className="md:mt-[80px] mt-[40px]">
          <span className="text-white text-lg text-slate-500">Hello, I'm</span>
          <h1 className="text-white text-2xl mt-2">Adrian Wang</h1>
          <h2 className="text-white text-xl mt-2 text-slate-400">
            Frontend Developer
          </h2>
          <PrimaryButton onClickFuntion={handleDownload} title="Download CV" />
          <PrimaryButton
            onClickFuntion={() => scrollToSection('contactMe')}
            title={'Contact Info'}
          />
        </div>
      </section>

      <section className="mt-[100px]" id="about">
        <h1 className="text-white text-3xl">ABOUT ME</h1>
        <div className="flex flex-wrap md:flex-nowrap justify-center  mt-[100px] ">
          <div className="w-full max-w-[380px]">
            <img className="rounded-3xl" src="public/testing-2.png" alt="" />
          </div>
          <div className="md:w-2/3 w-full flex flex-wrap justify-around text-slate-400 pt-10">
            <div className="grid content-center w-80 h-40 border border-white-600 rounded-2xl ">
              <GraduationCap className="m-auto w-10 h-10 text-white" />
              <span className="text-xl text-white">Education</span>
              <span className="">Bachelors Degree of Computer Science</span>
            </div>
            <div className="grid content-center w-80 h-40 border border-white-600 rounded-2xl ">
              <FileCode className="m-auto w-10 h-10 text-white" />
              <span className="text-xl text-white">Experience</span>
              <span className="">1 year Frontend Development</span>
            </div>
            <p className="text-start ps-8 pt-8">
              Passionate and ambitious computer science graduate with a strong
              foundation in programming languages. Seeking a full-time web
              developer position to apply my skills in web application
              development. I am highly motivated to contribute to the creation
              of innovative solutions and make a positive impact.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[100px]" id="skills">
        <h1 className="text-white text-3xl mb-[60px]"> SKILLS</h1>
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
      <section className="mt-[100px]" id="projects">
        <h1 className="text-white text-3xl mb-[60px]"> PROJECTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10">
          <CusCard
            imageUrl={'public/dex.jpg'}
            projectName={'Dex Collection'}
            href={'https://www.dexcollection.com.au/'}
          />
          <CusCard
            imageUrl={'public/hqp.jpg'}
            projectName={'High Quality Promo'}
            href={'https://www.hqpstaging.com.au/'}
          />
          <CusCard
            imageUrl={'public/pb.jpg'}
            projectName="Promo Brands"
            href={'https://www.promobrands.com.au/'}
          />
        </div>
      </section>

      <section id="contactMe" className="mt-20">
        <h1 className="text-white text-3xl mb-[60px]">HIRE ME</h1>
        <div className="flex flex-wrap sm:flex-nowrap  gap-3">
          <ContactForm />
          <div className="pt-3 w-full text-gray-400 rounded-lg flex flex-col gap-5">
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
