import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Messenger from "./components/user/messenger/Messenger";
import Groups from "./components/user/group";
import GroundHeader from "./components/user/group/GroudHeader";
import GroundMember from "./components/user/group/GroundMember";
import GroundAdmin from "./components/user/group/GroundAdmin";
import GroupsBlog from "./components/user/group/GroundsBlog";
import Friends from "./components/user/friends/Friends";
import FriendInvitation from "./components/user/friends/FriendInvitation";
import FriendsList from "./components/user/friends/FriendsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Messenger></Messenger> */}

      <Groups></Groups>
      {/* <GroundHeader></GroundHeader> */}
      {/* <GroundMember></GroundMember> */}
      {/* <GroundAdmin></GroundAdmin> */}
      {/* <Groups></Groups> */}
      {/* <GroupsBlog></GroupsBlog> */}
      {/* <Friends></Friends> */}
      {/* <FriendInvitation></FriendInvitation> */}
      {/* <FriendsList></FriendsList> */}
      {/* <NavBar></NavBar> */}
    </>
  );
}

export default App;
