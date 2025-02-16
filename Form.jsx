import { useState } from "react";

export default function Form() {
  const [details, setDetails] = useState({ yourId: "", password: "" });

  {/* Event Handilings to update values after enter userId and password*/}
  function handleChange(event) {
    const { name, value } = event.currentTarget;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  {/* Event Handilings to submit a Form */}
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted:", details);
  }

  return (
    <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
      {/* Email/User ID/Phone No Input */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          User ID/ Email/ Phone No
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:border-blue-400 hover:shadow-md transition-all duration-300"
          placeholder="Enter your email, user ID, or phone no"
          name="yourId"
          value={details.yourId}
          onChange={handleChange}
        />
      </div>

      {/* Password Input */}
      <div>
        <div className="flex justify-between items-center">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <a
            href="#"
            className="mb-[6px] text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:border-blue-400 hover:shadow-md transition-all duration-300"
          placeholder="Enter your password"
          name="password"
          value={details.password}
          onChange={handleChange}
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#008000] text-white py-2 rounded-md hover:bg-[#008000c4] focus:outline-none"
      >
        Login
      </button>
    </form>
  );
}
