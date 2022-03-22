import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { getSelf } from "../actions/user.js";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper.jsx";
import UserCard from "../components/UserCard.jsx";
import Grid from "../components/Grid.jsx";
import LayoutKeyboard from "../components/LayoutKeyboard.jsx";
import LeaderboardCard from "../components/LeaderboardCard.jsx";
import { getLeaderboard, submitWord } from "../actions/game.js";


function Play() {
  const accessToken = () => localStorage.getItem("accessToken");
  
  // State for Discord user
  const [user, setUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState(null);
  const navigate = useNavigate();
  
  // Update user state by fetching from discord.com
  useEffect(() => {
    async function fetchData() {
      const user = await getSelf(accessToken());
      if (!user) {
        // Access token is invalid or has been tampered with
        window.localStorage.removeItem("accessToken");
        // eslint-disable-next-line
        navigate("/");
        return;
      }

      const leaderboard = await getLeaderboard();

      setUser(user);
      setLeaderboard(leaderboard);
    }


    fetchData();
  }, []);

  const guesses = [[]];
  let cursorSpace = 1;
  
  function updateGuess(char){
    const current =  guesses[guesses.length-1]
    if(current && current.length < 7){
      current.push(char)
      
      const cursorElement = document.getElementById(String(cursorSpace))
      cursorSpace++;

      cursorElement.textContent = char;
    }

   

      }

    function delChar(){
        if(cursorSpace !== 1){
          const current =  guesses[guesses.length-1]

          current.pop()
          guesses[guesses.length-1] = current;
          const removedLetterElement = document.getElementById(String(cursorSpace-1))
          
          removedLetterElement.textContent = "";
          cursorSpace--;
        }

    }

  async function getResult(word){
    return await submitWord(word,accessToken())

  }

  function getColor(c){
    if(c === 1){
      return "#f59e0b"
    }else if(c === 2){
      return "#65a30d"
    } else {
      return "#404040"
    }
  }

  const keyHandler = (t) => {
    if(t.key){
      handleKey(t.key)
    }else{
      handleKey(t.detail)
    }

  }

  function checkWord(){
    const current =  guesses[guesses.length-1]
    if(current.length === 7){

      const firstLetter =  (guesses.length-1) * 7 + 1;
      
      getResult(current.join(""))
        .then(res=> {
          if(res.status === 200){

            current.forEach((c,i) => {
              setTimeout(() => {
                const letterElement =  document.getElementById(firstLetter+i);
                letterElement.style.backgroundColor = getColor(Number(res.data.data.colors[i]))       
              },200 * i+1)
      
            })
      
            if(res.data.code === "WORD_GUESS_CORRECT"){
              window.alert(res.data.message)
    
            }else{
              window.alert(res.data.message)
            }
      
            if(guesses.length === 6 && !res.data.code === "WORD_GUESS_CORRECT"){
              window.alert("Better luck next time!")
            }
            guesses.push([])
    
          }else{
            if(res.data.code === "GAME_ALREADY_OVER"){
              window.alert(res.data.message)
              window.removeEventListener("keyup",keyHandler)
            }else if(res.data.code === "WORD_NOT_FOUND"){
              window.alert(res.data.message)
    
            }
          }
        })
      
      
    }

  }
  function handleKey(char){
    if(char === "{enter}" || char === "Enter"){
      checkWord()
    }else if(char.match(/[a-z]/i) && char.length === 1){
      updateGuess(char)
    }else if(char === "{bksp}" || char === "Backspace"){
      delChar()
    }
  }


  useEffect(() => {
    document.addEventListener("keyup", keyHandler)
  },[])

  return (user && leaderboard) ? (
    <Wrapper>
      <div className="flex flex-wrap p-6 text-neutral-200 h-screen" >
        <div className="w-1/3 bg-neutral-800 bg-opacity-80 mr-2 rounded h-full text-center overflow-auto hidden md:block">
          <UserCard user={user} />
          <h1 className="font-bold text-2xl">Leaderboard</h1>
          <div>
            {
              leaderboard.map((el) => (
                <LeaderboardCard data={el}/>
              ) )
            }
            
          </div>
          

        </div>
        <div className="w-2/3 flex-1 bg-neutral-800 bg-opacity-80 m-auto rounded-lg h-full">
          <Grid/>
          <LayoutKeyboard onKeyPress={(k) => {
            // This is being done because for some weird reason
            // js doesn't want to work :(
            const ev = new CustomEvent('keyup',{
              detail: k
            })
            document.dispatchEvent(ev)
          }}/>
        </div>
      </div>
    </Wrapper>
  ) : (
    <Loading />
  );
}

export default Play;
