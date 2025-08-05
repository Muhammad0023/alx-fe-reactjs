import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-4 md:p-8 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="rounded-full w-24 h-24 md:w-40 md:h-40 mb-4"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center">
          Muhammad Ali
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
          Front-End Developer passionate about building responsive and
          accessible web applications.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
