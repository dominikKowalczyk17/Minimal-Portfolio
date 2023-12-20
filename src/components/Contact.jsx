import React, { useRef, useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_09wixud",
        "template_tgr7q1g",
        form.current,
        "iM6RSbZNa5i62ngwX",
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setIsMessageSent(true);

          // Reset the message after a few seconds (optional)
          setTimeout(() => {
            setIsMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          id="form"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="to_name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="from_name"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="submit"
            value="Send"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white hover:cursor-pointer"
          />
        </form>
      </div>
      {isMessageSent && (
        <div className="mt-4 text-green-600 text-center">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
