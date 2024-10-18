// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [fingerprintImage, setFingerprintImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFingerprintImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="font-bold text-4xl text-gray-800">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <label className="w-full text-center text-gray-700 mt-4">
        Import your fingerprint image
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {fingerprintImage && (
        <img
          src={fingerprintImage}
          alt="Fingerprint"
          className="mt-4 w-32 h-32 object-cover border border-gray-300 rounded-md"
        />
      )}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <Link to="/recovery">
          <p className="cursor-pointer text-blue-600 hover:underline">
            Forgot your password?
          </p>
        </Link>
        <Link to="/register">
          <p className="cursor-pointer text-blue-600 hover:underline">
            Create new account
          </p>
        </Link>
      </div>
      <button className="bg-blue-600 text-white font-semibold px-8 py-2 mt-4 rounded-md hover:bg-blue-700 transition duration-200">
        Sign In
      </button>
    </form>
  );
};

export default Login;
