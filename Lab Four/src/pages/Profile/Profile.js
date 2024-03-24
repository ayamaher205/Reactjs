import {  useSelector } from "react-redux";

const Profile = () => {
    const userData = useSelector( ( state ) => state.profile.userInfo );
    console.log( userData );
    return (
      <>
        {userData ? (
          <>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </>
        ) : (
          <p>There is no user</p>
        )}
      </>
    );
}
export default Profile;
