import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto mt-10">
      <img
        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h2 className="text-lg md:text-xl font-semibold text-center mt-4">John Doe</h2>
      <p className="text-gray-600 text-center">Full Stack Developer</p>
    </div>
  );
};

export default UserProfile;
