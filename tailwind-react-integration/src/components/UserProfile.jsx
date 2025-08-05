

function UserProfile() {
  return (
    <div className="container mx-auto sm:p-4 p-2 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/100"
          alt="User"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Muhammad Ali</h2>
          <p className="text-sm sm:text-base text-gray-600">
            A passionate frontend developer who loves working with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
