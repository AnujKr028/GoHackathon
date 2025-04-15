"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

const Page = () => {
  // For form submission state (to disable button during submission)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // For form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const { name, email, organisation, message } = formData;
    const isEmailValid = /.+@.+\..+/.test(email); // Basic email validation
    const isFormValid =
      name.trim() !== "" &&
      email.trim() !== "" &&
      isEmailValid &&
      organisation.trim() !== "" &&
      message.trim() !== "";

    if (!isFormValid) {
      toast.error("Please fill all the fields correctly!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });

      if (response.ok) {
        // Show success toast
        toast.success("Form submitted and email sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          organisation: "",
          message: "",
        });
      } else {
        // Show error toast
        toast.error("Failed to send email. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Toast container for notifications */}
      <ToastContainer />

      <Navbar />

      {/* Center the form */}
      <div className="flex flex-1 items-center justify-center mt-10 mb-10">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md flex flex-col font-mono">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-8">
            Student/Organisation Details
          </h2>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black text-xs mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg text-gray-800 px-3 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[10px]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black text-xs mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[11px]"
              />
            </div>

            {/* Organisation */}
            <div className="flex flex-col">
              <label htmlFor="organisation" className="text-black text-xs mb-2">
                Organisation
              </label>
              <input
                type="text"
                id="organisation"
                placeholder="Enter your organisation name"
                value={formData.organisation}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[11px]"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-black text-xs mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter all the details about your hackathon"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 rounded-lg px-3 py-4 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[11px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-white border border-gray-600 text-black py-2 rounded-lg hover:bg-gray-200 transition font-mono cursor-pointer ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;