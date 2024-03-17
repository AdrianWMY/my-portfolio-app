import React from 'react';
import { Input } from './ui/input';
import { Textarea } from '@/components/ui/textarea';

import { ImagePlus } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="w-1/2">
      <div className="flex justify-between gap-2">
        <input
          className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2 "
          type="text"
          placeholder="First Name"
        />
        <input
          className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2"
        type="email"
        placeholder="Email"
      />

      <textarea
        placeholder="Message"
        rows={10}
        cols={15}
        className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2"
      ></textarea>
    </div>
  );
};

export default ContactForm;
