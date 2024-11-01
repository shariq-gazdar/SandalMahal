import React, { useState } from "react";

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
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default Contact;
