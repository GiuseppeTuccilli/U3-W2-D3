import MyNavbar from "../Components/MyNavbar";
import AutoPlay from "./AutoPlay";
import ButtonsGroup from "./ButtonsGroup";
import MaturitySettings from "./MaturitySettings";
import ProfileTitle from "./ProfileTitle";
import UserImage from "./UserImage";
const Profile = function () {
  return (
    <>
      <MyNavbar />
      <ProfileTitle />
      <UserImage />
      <MaturitySettings />
      <AutoPlay />
      <ButtonsGroup />
    </>
  );
};

export default Profile;
