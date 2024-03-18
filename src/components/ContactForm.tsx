import PrimaryButton from './PrimaryButton';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState('Submit');
  const [showAlert, setShowAlert] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('Submitting....');
    setIsDisabled(true);

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.EMAIL_JS_SERVICE_ID || 'DEFAULT_SERVICE_ID';
    const templateId =
      process.env.EMAIL_JS_TEMPLATE_ID || 'DEFAULT_TEMPLATE_ID';
    const publicKey = process.env.EMAIL_JS_PUBLIC_KEY || 'DEFAULT_PUBLIC_KEY';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: firstName + ' ' + lastName,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFirstname('');
        setLastName('');
        setEmail('');
        setMessage('');
        setSubmitStatus('Submit');
        setIsDisabled(false);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="w-full">
      <Alert
        className="bg-gray-700 text-gray-200 border-none mb-2"
        style={{ display: showAlert ? 'block' : 'none' }}
      >
        <AlertTitle>Form Submitted Successfully!</AlertTitle>
        <AlertDescription>
          Thank you for your submission. I'll be in touch with you as soon as
          possible.
        </AlertDescription>
      </Alert>

      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between gap-2">
          <input
            className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2 "
            type="text"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          rows={10}
          cols={15}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-700	w-full text-gray-400 py-2 px-3 rounded-lg mb-2"
          required
        ></textarea>
        <PrimaryButton
          //   onClickFuntion={handleFormSubmit}
          additionStyle="w-full m-auto"
          title={submitStatus}
          disable={isDisabled}
        />
      </form>
    </div>
  );
};

export default ContactForm;
