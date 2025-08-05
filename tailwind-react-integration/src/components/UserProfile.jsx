// src/components/UserProfile.jsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="p-2 sm:p-4 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-0 sm:mr-6"
        />
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">John Doe</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Frontend Developer based in Addis Ababa, Ethiopia. Passionate about building accessible and responsive web apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
