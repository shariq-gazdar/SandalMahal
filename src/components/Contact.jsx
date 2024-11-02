import React, { useState } from "react";
import home from "../assets/home.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Gmail from "../assets/gmail.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission logic, like sending the data to a server
    console.log("Form submitted:", formData);
    alert("Message has been sent successfully!");
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" mx-auto p-6 bg-gray-800 text-white  shadow-lg h-svh w-screen flex flex-col items-center ">
      <a href="/" className="self-end " title="Home">
        <img src={home} alt="" className="w-10" />
      </a>
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-[30rem]">
        {/* Name */}
        <label className="block mb-2 font-medium">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
        </label>

        {/* Email */}
        <label className="block mb-2 font-medium">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          />
        </label>

        {/* Message */}
        <label className="block mb-2 font-medium">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded text-white"
          ></textarea>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-900 py-2 mt-4 rounded hover:bg-yellow-400 transition-all font-semibold"
        >
          Send Message
        </button>
      </form>
      <div className="socials flex gap-x-4 mt-6">
        <a href="">
          <img
            src={Instagram}
            alt=""
            className="w-10 bg-white rounded-full p-1"
            title="Instagram"
          />
        </a>
        <a href="">
          <img
            src={Facebook}
            alt=""
            className="w-10 bg-white rounded-full p-1"
            title="Facebook"
          />
        </a>
        <a href="">
          <img
            src={Gmail}
            alt=""
            className="w-10 bg-white rounded-full p-1"
            title="Gmail"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
