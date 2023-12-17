import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from '@/components/ui/button';
import './App.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Button>Click me</Button>
      </div>

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
      </Accordion>
    </>
  );
}

export default App;
