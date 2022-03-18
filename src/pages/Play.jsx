import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import {getSelf} from '../actions/user.js'
import { useNavigate } from 'react-router-dom';
import Wrapper from "../components/Wrapper.jsx";

function Play() {
  const accessToken = () => localStorage.getItem("accessToken");

  // State for Discord user
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Update user state by fetching from discord.com
  useEffect(() => {

    async function fetchData(){
     const user = await getSelf(accessToken())
      if(!user){
        // Access token is invalid or has been tampered with
            window.localStorage.removeItem('accessToken')
            navigate('/')
            return
      }
    
      setUser(user.username)
    }
    
    fetchData()

  }, []);


  return (
    user ? 
    <Wrapper>
      <div className="flex flex-wrap p-6 h-screen text-neutral-200">
        <div className="w-1/3 bg-neutral-800 bg-opacity-80 mr-2 rounded">{user}</div>
        <div className="w-2/3 flex-1 bg-neutral-800 bg-opacity-80 ml-2 rounded">2</div>
      </div>
    </Wrapper> : <Loading/> 
  )
}

export default Play;
