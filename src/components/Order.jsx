import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import home from "../assets/home.svg";

function Order() {
  const location = useLocation();
  const { title, description } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
    notes: "",
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

    // EmailJS configuration
    const emailParams = {
      product_title: title,
      product_description: description,
      user_name: formData.name,
      user_email: formData.email,
      user_address: formData.address,
      quantity: formData.quantity,
      phone: formData.phone,
      notes: formData.notes,
    };

    emailjs
      .send(
        "service_bblxa1s",
        "template_xoew5zk",
        emailParams,
        "SEi6_HMvtVAUZGPxS"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Order has been submitted successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        alert("There was an error submitting your order.");
      });
  };

  return (
    <div className=" mx-auto p-8 bg-gray-900 text-gray-200 shadow-lg   w-svw h-fit">
      <a href="/">
        <img src={home} alt="" className="w-10 float-right" />
      </a>
      <h1 className="text-3xl font-bold mb-4">Order Page</h1>
      <h2 className="text-xl font-semibold mb-2">Product: {title}</h2>
      <p className="text-gray-400 mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="w-[30rem] flex flex-col m-auto">
        <label className="block mb-2 font-medium">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
          />
        </label>

        <label className="block mb-2 font-medium">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
          />
        </label>

        {/* Address */}
        <label className="block mb-2 font-medium">
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
          ></textarea>
        </label>

        {/* Quantity */}
        <label className="block mb-2 font-medium">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
          />
        </label>

        <label className="block mb-2 font-medium">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
            required
          />
        </label>

        {/* Additional Notes */}
        <label className="block mb-2 font-medium">
          Additional Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
            placeholder="Any specific requests?"
          ></textarea>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-900 py-2 mt-4 rounded hover:bg-yellow-400 transition-all font-semibold"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default Order;
