import UserInfo from './UserInfo';

// Remove the userData prop
function ProfilePage() {
  // No prop drilling needed here anymore!
  return <UserInfo />;
}

export default ProfilePage;