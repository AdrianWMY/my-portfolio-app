import { useState } from 'react';
import { Button } from '@/components/ui/button';
import './App.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Container,
  Mail,
  GraduationCap,
  FileCode,
  BadgeCheck,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from './components/navbar';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  9;
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className="mt-[100px] w-2/3 m-auto flex justify-between">
          <div className="w-full max-w-[400px]">
            <img className="rounded-full" src="public/testing.png" alt="" />
          </div>

          <div className="mt-[80px]">
            <span className="text-white text-lg text-slate-500">
              Hello, I'm
            </span>
            <h1 className="text-white text-2xl mt-2">Adrian Wang</h1>
            <h2 className="text-white text-xl mt-2 text-slate-400">
              Frontend Developer
            </h2>
            <Button className="mt-3 me-3 rounded-lg hover:bg-gray-700">
              Download CV
            </Button>
            <Button className="mt-3 me-3 rounded-lg hover:bg-gray-700">
              Contact Info
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-[100px]">
        <h1 className="text-white text-4xl">About Me</h1>
        <div className="flex flex-wrap md:flex-nowrap   mt-[100px] ">
          <div className="w-full max-w-[380px] mr-6">
            <img className="rounded-3xl" src="public/testing-2.png" alt="" />
          </div>
          <div className="w-2/3 flex flex-wrap justify-around text-slate-400 pt-10">
            {/* <div className="grid grid-cols-2 justify-items-center content-center"> */}
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
            {/* </div> */}
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

      <section className="mt-[100px]">
        <h1 className="text-white text-4xl mb-[60px]"> Experience</h1>
        <div className="grid grid-cols-3 place-content-around justify-items-center max-w-[800px] m-auto h-72 border border-white-600 rounded-2xl ">
          <div className="text-white flex w-40  ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">HTML</span>
          </div>

          <div className="text-white flex w-40  ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">CSS</span>
          </div>
          <div className="text-white flex w-40  ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">JavaScript</span>
          </div>

          <div className="text-white flex w-40 ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">React</span>
          </div>

          <div className="text-white flex w-40 ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">Bootstrap</span>
          </div>
          <div className="text-white flex w-40 ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">Tailwind</span>
          </div>
          <div className="text-white flex w-40 ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">Java</span>
          </div>

          <div className="text-white flex w-40 ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">PHP</span>
          </div>
          <div className="text-white flex w-40 ">
            <BadgeCheck />
            <span className=" ms-5 text-xl">Git</span>
          </div>
        </div>
      </section>
      <section className="mt-[100px]">
        <h1 className="text-white text-4xl mb-[60px]"> Projects</h1>

        <div className="flex justify-around">
          <div className="w-full max-w-[300px] pt-4 border rounded-3xl">
            <img
              className="w-2/3 m-auto rounded-3xl"
              src="public/Screen Shot 2024-02-18 at 10.55.37 am.png"
              alt=""
            />
            <div className="mt-2 text-white ">Project One</div>
            <div>
              <Button className="mt-3 me-3 rounded-lg hover:bg-gray-700">
                Live Demo
              </Button>
            </div>
          </div>
          <div className="w-full max-w-[300px] pt-4 border rounded-3xl">
            <img
              className="w-2/3 m-auto rounded-3xl"
              src="public/Screen Shot 2024-02-18 at 10.55.37 am.png"
              alt=""
            />
            <div className="mt-2 text-white ">Project One</div>
            <div>
              <Button className="mt-3 me-3 rounded-lg hover:bg-gray-700">
                Live Demo
              </Button>
            </div>
          </div>
          <div className="w-full max-w-[300px] pt-4 border rounded-3xl">
            <img
              className="w-2/3 m-auto rounded-3xl"
              src="public/Screen Shot 2024-02-18 at 10.55.37 am.png"
              alt=""
            />
            <div className="mt-2 text-white ">Project One</div>
            <div>
              <Button className="mt-3 me-3 rounded-lg hover:bg-gray-700">
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      {/* <Navbar></Navbar>

      <Card className="w-1/2 mx-auto text-start">
        <CardHeader>
          <CardTitle className="">Create an Account</CardTitle>
          <CardDescription className="">
            Enter your email below to create your account
          </CardDescription>
          <div className="flex justify-center">
            <Button className="w-1/2 me-10" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button className="w-1/2" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Goole
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input id="email" placeholder="email" />
        </CardContent>
        <CardFooter>
          <Button className="w-3/4 m-auto">Click me</Button>
        </CardFooter>
      </Card>

      <Accordion type="single" collapsible>
        <AccordionItem
          className="bg-[#F5F5F5] border border-black-600 mb-1 rounded-lg"
          value="item-1"
          onClick={toggleAccordion}
        >
          {isOpen ? (
            <AccordionTrigger className="rounded bg-blue-500 ps-2 pe-2 text-white active:no-underline hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
          ) : (
            <AccordionTrigger className="rounded  ps-2 pe-2 text-blue-400 active:no-underline hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
          )}

          <AccordionContent className="bg-white border-2 ps-2 pt-2 text-start text-base h-24">
            No, we don’t, but we have a huge range of amazing online products
            for delivery to your door, plus we’re open 24/7.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </>
  );
}

export default App;
