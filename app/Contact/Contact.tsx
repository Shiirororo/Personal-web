"use client";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sendEmail } from "../lib/resend";
import { useState } from "react";







export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    await sendEmail({
    name: form.name,
    email: form.email,
    message: form.message,
  }); 

    console.log("User send an email: ", form);
    setForm({name: "", email: "", message: ""});
    alert("Send message successfully")
}
catch(error) {
  console.error("Error sending email", error);
}

    //
  }




  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        {/* Left: Social + Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out through the form or connect with me on social
            media!
          </p>
          <div className="flex space-x-6 text-2xl text-gray-600 dark:text-gray-300">
            <a href="https://github.com/Shiirororo" target="_blank">
              <FaGithub className="hover:text-black dark:hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/nh%C3%A2nn-undefined-b58037385/" target="_blank">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="https://x.com/SadShiro468?s=21" target="_blank">
              <FaXTwitter className="hover:text-white-500 transition" />
            </a>
            <a href="https://www.facebook.com/chackhongphai.nhan/" target="_blank">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
              onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              value = {form.name}
              onChange={handleChange}
              name = "name"
              type="text"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Your contact email
            </label>
            <input
              value = {form.email}
              name ="email"
              onChange={handleChange}
              type="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              name = "message"
              value = {form.message}
              onChange = {handleChange}
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
