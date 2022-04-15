import Wrapper from "../components/Wrapper.jsx";
import Link from "../components/Link";
import Button from "../components/Button.jsx";

function Login() {
  // function signInWithDiscord() {
  //   window.location = config.oauth;
  // }

  localStorage.setItem("firstTime",false)
  return (
    <Wrapper>
      <div className="p-32 my-4 text-neutral-400">
        <div className="text-5xl font-bold font-heading">
          <h1 className="float-left text-slate-100 hover:text-green-400">
            Valuab
          </h1>
          <h1 className="text-neutral-400 hover:text-yellow-400">le</h1>
        </div>

        <p className="text-xl ml-2">Patience is key!</p>
        <h3 className="text-2xl mt-5 mb-3 text-neutral-200">How to play?</h3>
        <p className="text-lg w-2/3">
          The structure of the game is similar to the original WORDLE except
          everytime you get the correct word, your letters are changed to a
          cryptocurrency based on the cryptocurrency's first letter and the
          prices of the cryptos are summed up.
          <br />
          <br />
          The goal? Play the perfect time when all the prices are peaking to get
          the highest value of the day.
          <br />
          <br />
          Made by{" "}
          <strong>
            <Link href="https://ffaanngg.github.io">Shiv</Link>
          </strong>{" "}
          for <Link href="https://discord.gg/builders">BuilderContests</Link>
        </p>

        <Button onClick={() => window.location = "/play"}>Play</Button>
      </div>
    </Wrapper>
  );
}

export default Login;
