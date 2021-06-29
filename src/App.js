import logo from "./logo.svg";
import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import img1 from "./icecream_cone.jpg";

function App(props) {
  return (
    <>
      <FullName Name1={"Mariam the boss coder (Sr. Sr. Sr. Developer)"} />
      <Address />
      <ProfilePhoto img_path={img1} />
    </>
  );
}

export default App;
