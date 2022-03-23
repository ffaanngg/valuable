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
import toast, { Toaster } from "react-hot-toast";

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
  }, [navigate]);

  const guesses = [[]];
  let cursorSpace = 1;

  function updateGuess(char) {
    const cursorElement = document.getElementById(String(cursorSpace));
    if (!cursorElement) {
      return;
    }
    const current = guesses[guesses.length - 1];

    if (current && current.length < 7) {
      current.push(char);

      cursorElement.textContent = char;
      cursorSpace++;
    }
  }

  function delChar() {
    const current = guesses[guesses.length - 1];
    if (cursorSpace !== 1 && current.length !== 0) {
      current.pop();
      guesses[guesses.length - 1] = current;
      cursorSpace--;
      const removedLetterElement = document.getElementById(String(cursorSpace));
      removedLetterElement.textContent = "";
    }
  }

  async function getResult(word) {
    return await submitWord(word, accessToken());
  }

  function getColor(c) {
    if (c === 1) {
      return "#f59e0b";
    } else if (c === 2) {
      return "#65a30d";
    } else {
      return "#404040";
    }
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
  function keyHandler(t){
    console.log(1)
    if (t.key) {
      handleKey(t.key);
    } else {
      handleKey(t.detail);
    }
  };

  function checkWord() {
    const current = guesses[guesses.length - 1];
    if (current.length === 7) {
      const firstLetter = (guesses.length - 1) * 7 + 1;

      getResult(current.join("")).then((res) => {
        if (res.status === 200) {
          
          if (res.data.code === "WORD_GUESS_CORRECT") {
            window.removeEventListener("keyup", keyHandler);
          }
          guesses.push([]);

          current.forEach((c, i) => {
            setTimeout(() => {
              const letterElement = document.getElementById(firstLetter + i);
              const color = res.data.data.colors[i]

              
              letterElement.style.backgroundColor = getColor(
                Number(color)
              );
              if(Number(color) === 0){
                letterElement.classList.add("animate__headShake")
              }else{
                letterElement.classList.add("animate__pulse")
              }
            }, 200 * i + 1);
          });

          if (res.data.code === "WORD_GUESS_CORRECT") {
            toast(res.data.message);
          } else {
            toast(res.data.message);
          }

          if (
            guesses.length === 7 &&
            res.data.code === "WORD_GUESS_INCORRECT"
          ) {
            window.removeEventListener("keyup", keyHandler);
            toast("Better luck next time!");
          }
        } else {
          if (res.data.code === "GAME_ALREADY_OVER") {
            toast(res.data.message);
            window.removeEventListener("keyup", keyHandler);
          } else if (res.data.code === "WORD_NOT_FOUND") {
            toast(res.data.message);
          }
        }
      });
    }else{
      const firstLetter = (guesses.length - 1) * 7 + 1;
      const currentChar = firstLetter + (current.length)
      document.getElementById(currentChar).classList.add("animate__flash")
    }
  }
  function handleKey(char) {
    if (char === "{enter}" || char === "Enter") {
      checkWord();
    } else if (char.match(/[a-z]/i) && char.length === 1) {
      updateGuess(char);
    } else if (char === "{bksp}" || char === "Backspace") {
      delChar();
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", keyHandler);
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return user && leaderboard ? (
    <Wrapper>
      <div className="w-3/3 bg-neutral-800 bg-opacity-80 mx-6 mt-4 rounded h-2/3 text-center overflow-auto md:hidden">
          <UserCard user={user} />
          <h1 className="font-bold text-2x text-neutral-200">Leaderboard</h1>
          <div>
            {leaderboard.map((el) => (
              <LeaderboardCard data={el} />
            ))}
          </div>
        </div>
      <div className="flex flex-wrap flex-row p-6 text-neutral-200 h-screen">
        <div className="w-1/3 bg-neutral-800 bg-opacity-80 mr-2 rounded h-full text-center overflow-auto hidden md:block">
          <UserCard user={user} />
          <h1 className="font-bold text-2xl">Leaderboard</h1>
          <div>
            {leaderboard.map((el) => (
              <LeaderboardCard data={el} />
            ))}
          </div>
        </div>
        <div className="w-2/3 flex-1 bg-neutral-800 bg-opacity-80 m-auto rounded-lg h-full">
          <Grid />
          <LayoutKeyboard
            onKeyPress={(k) => {
              // This is being done because for some weird reason
              // js doesn't want to work :(
              const ev = new CustomEvent("keyup", {
                detail: k,
              });
              document.dispatchEvent(ev);
            }}
          />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </Wrapper>
  ) : (
    <Loading />
  );
}

export default Play;
