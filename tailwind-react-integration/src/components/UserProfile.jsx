import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center space-y-4">
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
          src="https://via.placeholder.com/150"
          alt="User profile"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
          Muhammad Ali
        </h2>
        <p className="text-gray-600 text-sm text-center">
          Frontend Developer at XYZ Company. Passionate about UI/UX and React.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
