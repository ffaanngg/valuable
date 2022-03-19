import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { getSelf } from '../actions/user.js'
import { useNavigate } from 'react-router-dom';
import Wrapper from "../components/Wrapper.jsx";
import UserCard from "../components/UserCard.jsx";
import Grid from "../components/Grid.jsx";

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
            // eslint-disable-next-line
            navigate('/')
            return
      }
    
      setUser(user)
    }
    
    fetchData()

  }, []);


  return (
    user ? 
    <Wrapper>
      <div className="flex flex-wrap p-6 h-screen text-neutral-200">
        <div className="w-1/3 bg-neutral-800 bg-opacity-80 mr-2 rounded hidden">
          <UserCard user={user}/>
        </div>
        <div className="w-full flex-1 bg-neutral-800 bg-opacity-80 m-auto rounded-lg">
          <Grid/>
        </div>
      </div>
    </Wrapper> : <Loading/> 
  )
}

export default Play;
