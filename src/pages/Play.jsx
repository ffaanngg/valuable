import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading.jsx";


function Play() {
  const accessToken = () => localStorage.getItem("accessToken");

  // State for Discord user
  const [user, setUser] = useState(null);

  // Update user state by fetching from discord.com
  useEffect(() => {
    axios
      .get("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${accessToken()}`,
        },
      })
      .then((r) => {
        setUser(r.data);
      });
  }, []);


  return (
    user ? 
    <div className="flex flex-wrap">
        <div className="w-1/3 my-4 mx-4 bg-black h-screen">1</div>
        <div className="w-2/3 my-4 mx-4 flex-1 h-screen bg-slate-200">2</div>
    </div> : <Loading/> 
  )
}

export default Play;
